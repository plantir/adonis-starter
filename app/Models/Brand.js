"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Brand extends Model {
  static get allowField() {
    return ["title", "en_title"];
  }
}

module.exports = Brand;
