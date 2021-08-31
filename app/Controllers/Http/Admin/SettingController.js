"use strict";

class SiteController {
  constructor() {
    this.Model = use("App/Models/Setting");
  }
  async getSetting() {
    let item = await this.Model.query().orderBy("id", "DESC").first();
    return item || {};
  }

  changeSetting({ request }) {
    let data = request.only(this.Model.allowField);
    return this.Model.create(data);
  }
}

module.exports = SiteController;
