"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Project extends Model {
  static boot() {
    super.boot();
    this.addTrait("ConvertToJson");
  }
  static get jsonFields() {
    return ["images"];
  }
  static get allowField() {
    return [
      "title",
      "description",
      "en_title",
      "en_description",
      "image",
      "banner_image",
      "images",
      "is_completed",
    ];
  }
}

module.exports = Project;
