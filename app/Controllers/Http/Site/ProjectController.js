"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  constructor() {
    this.Model = use("App/Models/Project");
  }
  async query({ lang, params: { id } }) {
    let projects = await this.Model.query()
      .where({ is_deleted: false })
      .orderBy("id", "DESC")
      .fetch();
    projects = projects.toJSON();
    projects = projects.map((x) => {
      if (lang == "en") {
        x.title = x.en_title;
        x.description = x.en_description;
      }
      delete x.en_description;
      delete x.en_title;
      return x;
    });
    return projects;
  }
  async show({ lang, params: { id } }) {
    let project = await this.Model.query()
      .where({ is_deleted: false })
      .where({ id })
      .firstOrFail();
    let related_projects = await this.Model.query()
      .where("id", "<>", id)
      .where({ is_deleted: false })
      .orderBy("id", "DESC")
      .limit(6)
      .fetch();
    project = project.toJSON();
    project.related_projects = related_projects.toJSON();
    project.related_projects = project.related_projects.map((y) => {
      if (lang == "en") {
        y.title = y.en_title;
        y.description = y.en_description;
      }
      delete y.en_description;
      delete y.en_title;
      return y;
    });
    if (lang == "en") {
      project.title = project.en_title;
      project.description = project.en_description;
    }
    delete project.en_description;
    delete project.en_title;
    return project;
  }
}

module.exports = ProjectController;
