"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Attribute extends Model {
  static get allowField() {
    return ["name", "label", "icon", "default"];
  }
}

module.exports = Attribute;
