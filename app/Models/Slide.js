"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Slide extends Model {
  static get allowField() {
    return ["src", "title","sort_order"];
  }
}

module.exports = Slide;
