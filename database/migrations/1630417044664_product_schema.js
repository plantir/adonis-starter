"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("name");
      table.string("slug").unique().index();
      table.integer("brand_id").unsigned().references("id").inTable("brands");
      table.json("images");
      table.string("main_image");
      table.text("description");
      table.string("en_name");
      table.text("en_description");
      table.boolean("is_deleted").defaultTo("false");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
