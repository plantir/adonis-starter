"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with brands
 */
class BrandController {
  constructor() {
    this.Model = use("App/Models/Brand");
  }
  async index({ lang }) {
    let brands = await this.Model.query().where({ is_deleted: false }).fetch();
    brands = brands.toJSON();
    brands = brands.map((x) => {
      if (lang == "en") {
        x.title = x.en_title;
      }
      delete x.en_title;
      return x;
    });
    return brands;
  }
}

module.exports = BrandController;
