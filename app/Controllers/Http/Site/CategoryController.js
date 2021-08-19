"use strict";

class CategoryController {
  constructor() {
    this.Model = use("App/Models/Category");
  }
  async index() {
    return this.Model.query()
      .where({ is_deleted: false })
      .withCount("products", (builder) => builder.where({ is_deleted: false }))
      .fetch();
  }

  async show({ params: { slug } }) {
    let category = await this.Model.query()
      .where({ slug })
      .where({ is_deleted: false })
      .with("products", (builder) => builder.where({ is_deleted: false }))
      .first();
    if (!category) {
      throw new Error("category not found");
    }
    return category;
  }
}

module.exports = CategoryController;
