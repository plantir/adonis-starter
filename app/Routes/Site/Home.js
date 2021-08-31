/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.group(() => {
  Route.get("slides", "HomeController.slides");
  Route.get("about", "HomeController.about");
  Route.get("projects", "HomeController.projects");
  Route.get("articles", "HomeController.articles");
  Route.get("map", "HomeController.map");
})
  .namespace("Site")
  .prefix("home");
