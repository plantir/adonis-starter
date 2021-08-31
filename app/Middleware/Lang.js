"use strict";

class FindLanguage {
  async handle(ctx, next) {
    let { lang = "fa" } = ctx.request.headers();
    ctx.lang = lang;
    await next();
  }
}

module.exports = FindLanguage;
