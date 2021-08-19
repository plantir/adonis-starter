"use strict";

class ProductController {
  constructor() {
    this.Model = use("App/Models/Product");
  }
  async index({ request, response, view }) {
    return this.Model.query()
      .where({ is_deleted: false })
      .with("category")
      .fetch();
  }

  async show({ params: { slug }, request, response, view }) {
    let product = await this.Model.query()
      .where({ slug })
      .where({ is_deleted: false })
      .with("category", (builder) => builder.where({ is_deleted: false }))
      .with("attributes", (builder) => builder.where({ is_deleted: false }))
      .first();
    if (!product) {
      throw new Error("product not found");
    }
    return product;
  }
}

module.exports = ProductController;
