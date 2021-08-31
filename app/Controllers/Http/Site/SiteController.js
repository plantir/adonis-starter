"use strict";
const Setting = use("App/Models/Setting");
class SiteController {
  info() {
    return Setting.query().orderBy("id", "DESC").first();
  }
}

module.exports = SiteController;
