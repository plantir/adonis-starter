"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SettingSchema extends Schema {
  up() {
    this.create("settings", (table) => {
      table.increments();
      table.string("tell");
      table.string("fax");
      table.string("email");
      table.string("telegram");
      table.string("whatsapp");
      table.string("linkedin");
      table.string("instagram");
      table.string("mainOffice");
      table.string("lng");
      table.string("lat");
      table.timestamps();
    });
  }

  down() {
    this.drop("settings");
  }
}

module.exports = SettingSchema;
