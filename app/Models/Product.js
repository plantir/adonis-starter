"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("BaseModel");
const Attribute = use("App/Models/Attribute");
class Product extends Model {
  static boot() {
    super.boot();
    this.addTrait("ConvertToJson");
    this.addHook("beforeSave", "ProductHook.beforeSave");
  }
  static get allowField() {
    return [
      "slug",
      "name",
      "description",
      "en_name",
      "en_description",
      "brand_id",
      "main_image",
      "images",
    ];
  }
  static get jsonFields() {
    return ["images"];
  }
  static listOption(qs) {
    qs.withArray = ["brand"];
    return super.listOption(qs);
  }
  async change_attribute(attributes) {
    await this.attributes().detach();
    await this.attributes().attach(
      attributes.filter((item) => item.selected).map((item) => item.id),
      (row) => {
        row.value = attributes.find(
          (item) => row.attribute_id == item.id
        ).value;
        row.en_value = attributes.find(
          (item) => row.attribute_id == item.id
        ).en_value;
      }
    );
  }
  async load_attributes() {
    let all_attributes = await Attribute.query()
      .where({ is_deleted: false })
      .fetch();
    all_attributes = all_attributes.toJSON();
    let attributes = await this.attributes().fetch();
    attributes = attributes.toJSON();
    let result = all_attributes.map((item) => {
      let exist = attributes.find((attr) => attr.id == item.id);
      if (exist) {
        item.value = exist.pivot.value;
        item.en_value = exist.pivot.en_value;
        item.selected = true;
      }
      return item;
    });
    this.attributes = result;
  }
  brand() {
    return this.belongsTo("App/Models/Brand");
  }
  attributes() {
    return this.belongsToMany("App/Models/Attribute")
      .pivotTable("product_attributes")
      .withPivot(["value", "en_value"]);
  }
}

module.exports = Product;
