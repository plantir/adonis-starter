"use strict";

class ProductController {
  constructor() {
    this.Model = use("App/Models/Product");
  }
  async index({ request, lang }) {
    let qs = request.get();
    let data = await this.Model.listOption(qs);
    data = data.toJSON();
    data.data = data.data.map((x) => {
      if (lang == "en") {
        x.name = x.en_name;
      }
      delete x.en_name;
      return x;
    });
    if (qs.search) {
      data.data = data.data.filter((x) => {
        let keywords = qs.search.split(" ");
        return keywords.some((keyword) => x.name.includes(keyword));
      });
    }
    return data;
  }

  async show({ params: { slug }, lang, request, response, view }) {
    let product = await this.Model.query()
      .where({ slug })
      .where({ is_deleted: false })
      .with("brand", (builder) => builder.where({ is_deleted: false }))
      .with("attributes", (builder) => builder.where({ is_deleted: false }))
      .first();
    if (!product) {
      throw new Error("product not found");
    }
    product = product.toJSON();
    if (lang == "en") {
      product.name = product.en_name;
      product.description = product.en_description;
      product.attributes.map((x) => {
        x.pivot.value = x.pivot.en_value;
        x.label = x.en_label;
        delete x.pivot.en_value;
        delete x.en_label;
        return x;
      });
    }
    delete product.en_name;
    delete product.en_description;
    return product;
  }
}

module.exports = ProductController;
