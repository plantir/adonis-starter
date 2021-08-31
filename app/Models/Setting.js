"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");

class Setting extends Model {
  static get allowField() {
    return [
      "tell",
      "fax",
      "email",
      "telegram",
      "whatsapp",
      "linkedin",
      "instagram",
      "mainOffice",
      "lng",
      "lat",
    ];
  }
}

module.exports = Setting;
