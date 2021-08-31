"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Page extends Model {
  static boot() {
    super.boot();
  }
  static get allowField() {
    return [
      "slug",
      "name",
      "title",
      "description",
      "en_title",
      "en_description",
      "image",
    ];
  }
  static get softDelete() {
    return false;
  }
}

module.exports = Page;
