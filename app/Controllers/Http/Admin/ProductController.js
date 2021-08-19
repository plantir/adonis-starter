"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with attributes
 */
const Resource = use("Resource");
class ProductController extends Resource {
  constructor() {
    super();
    this.Model = use("App/Models/Product");
  }
  async store({ response, request }) {
    let data = request.only(this.Model.allowField || []);
    let item = await this.Model.create(data);
    let { attributes = [] } = request.post();
    await item.change_attribute(attributes);
    await item.load_attributes();
    response.status(201).send(item);
  }
  async show({ params: { id } }) {
    let item = await this.Model.find(id);
    await item.load_attributes();
    return item;
  }

  async update({ request, response, params: { id } }) {
    const data = request.only(this.Model.allowField || []);
    let item = await this.Model.find(id);
    item.merge(data);
    await item.save();
    let { attributes = [] } = request.post();
    await item.change_attribute(attributes);
    await item.load_attributes();
    response.status(200).send(item);
  }
}

module.exports = ProductController;
