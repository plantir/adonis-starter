"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with brands
 */
const Resource = use("Resource");
class BrandController extends Resource {
  constructor() {
    super();
    this.Model = use("App/Models/Brand");
  }
}

module.exports = BrandController;
