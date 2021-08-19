"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with attributes
 */
const Resource = use("Resource");
class AttributeController extends Resource {
  constructor() {
    super();
    this.Model = use("App/Models/Attribute");
  }
}

module.exports = AttributeController;
