"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BrandSchema extends Schema {
  up() {
    this.create("brands", (table) => {
      table.increments();
      table.string("title");
      table.string("en_title");
      table.boolean("is_deleted").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("brands");
  }
}

module.exports = BrandSchema;
