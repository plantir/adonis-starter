"use strict";
const User = use("App/Models/User");
const Encryption = use("Encryption");
/** @type {import('moment')} */
const moment = use("moment");
const Token = use("App/Models/Token");
class AuthController {
  async register({ request }) {
    let { username, password } = request.post();
    let is_exist = await User.findBy({ username });
    if (is_exist) {
      throw new Error("user exsit");
    }
    await User.create({
      username,
      password,
    });
    return "success";
  }

  async login({ request, auth }) {
    let { username, password } = request.post();
    try {
      await auth.attempt(username, password);
    } catch (error) {
      throw new Error("username or password is incorrect");
    }
    let user = await User.findBy({ username });
    if (!user.is_verified) {
      throw new Error("access denied");
    }
    return auth.withRefreshToken().generate(user, true);
  }
  async info({ request, response, auth }) {
    let user = await auth.getUser();
    if (!user.is_verified) {
      return response.status(401).send("access denied");
    }
    return { user };
  }
  async refresh({ request, auth }) {
    const { refreshToken } = request.post();
    let bycrypt = Encryption.decrypt(refreshToken);
    let time = moment().subtract(60, "minute").format("YYYY-MM-DD HH:mm");
    let token = await Token.query()
      .where({
        token: bycrypt,
        type: "jwt_refresh_token",
        is_revoked: false,
      })
      .where("created_at", ">", time)
      .last();
    if (!token) {
      throw new Error("refresh token expired please login again");
    }
    return auth.newRefreshToken().generateForRefreshToken(refreshToken, true);
  }
}

module.exports = AuthController;
