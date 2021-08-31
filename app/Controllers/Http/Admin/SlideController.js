"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with slides
 */
const Resource = use("Resource");
class SlideController extends Resource {
  constructor() {
    super();
    this.Model = use("App/Models/Slide");
  }
}

module.exports = SlideController;
