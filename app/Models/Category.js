"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Category extends Model {
  static get allowField() {
    return [
      "slug",
      "name",
      "cover_mobile",
      "cover_desktop",
      "cover_top",
      "icon",
      "selectedIcon",
      "image_mobile",
      "image_desktop",
    ];
  }
  products() {
    return this.hasMany("App/Models/Product");
  }
}

module.exports = Category;
