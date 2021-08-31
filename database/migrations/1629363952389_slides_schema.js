"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SlidesSchema extends Schema {
  up() {
    this.create("slides", (table) => {
      table.increments();
      table.string("title");
      table.string("src");
      table.integer("sort_order").unsigned();
      table.boolean("is_deleted").default(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("slides");
  }
}

module.exports = SlidesSchema;
