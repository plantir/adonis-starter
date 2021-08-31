"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pages
 */
class PageController {
  constructor() {
    this.Model = use("App/Models/Page");
  }
  async show({ params: { slug }, lang }) {
    let page = await this.Model.findByOrFail({ slug });
    page = page.toJSON();
    if (lang == "en") {
      page.title = page.en_title;
      page.description = page.en_description;
    }
    delete page.en_title;
    delete page.en_description;
    return page;
  }
}

module.exports = PageController;
