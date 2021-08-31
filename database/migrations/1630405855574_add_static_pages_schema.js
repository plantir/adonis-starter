"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const Database = use("Database");
class AddStaticPagesSchema extends Schema {
  async up() {
    let pages = [
      { slug: "information-research", name: "" },
      { slug: "information-communication", name: "" },
      { slug: "service-advice", name: "" },
      { slug: "service-installation", name: "" },
      { slug: "service-maintenance", name: "" },
      { slug: "service-spare", name: "" },
      { slug: "service-aftersale", name: "" },
    ];
    await Database.table("pages").insert(pages);
  }

  async down() {
    await Database.table("pages").truncate();
  }
}

module.exports = AddStaticPagesSchema;
