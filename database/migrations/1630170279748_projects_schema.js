"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectsSchema extends Schema {
  up() {
    this.create("projects", (table) => {
      table.increments();
      table.string("image");
      table.string("banner_image");
      table.string("title");
      table.text("description");
      table.json("images");
      table.string("en_title");
      table.text("en_description");
      table.boolean("is_completed");
      table.boolean("is_deleted").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectsSchema;
