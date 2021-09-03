"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AttributeSchema extends Schema {
  up() {
    this.create("attributes", (table) => {
      table.increments();
      table.string("name").unique();
      table.string("label");
      table.string("en_label");
      table.string("icon");
      table.string("default");
      table.boolean("is_deleted").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("attributes");
  }
}

module.exports = AttributeSchema;
