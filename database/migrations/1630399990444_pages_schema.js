"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PagesSchema extends Schema {
  up() {
    this.create("pages", (table) => {
      table.increments();
      table.string("slug").unique();
      table.string("name");
      table.string("title");
      table.text("description");
      table.string("en_title");
      table.text("en_description");
      table.string("image");
      table.timestamps();
    });
  }

  down() {
    this.drop("pages");
  }
}

module.exports = PagesSchema;
