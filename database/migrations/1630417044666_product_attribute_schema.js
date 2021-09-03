"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductAttributeSchema extends Schema {
  up() {
    this.create("product_attributes", (table) => {
      table.increments();
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table
        .integer("attribute_id")
        .unsigned()
        .references("id")
        .inTable("attributes");
      table.string("value");
      table.string("en_value");
      table.timestamps();
    });
  }

  down() {
    this.drop("product_attributes");
  }
}

module.exports = ProductAttributeSchema;
