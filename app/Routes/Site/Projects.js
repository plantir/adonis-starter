/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.get("", "ProjectController.query");
  Route.get(":id", "ProjectController.show");
})
  .prefix("projects")
  .namespace("Site");
