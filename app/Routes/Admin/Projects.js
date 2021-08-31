/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.customResource("", "ProjectController");
})
  .prefix("admin/projects")
  .namespace("Admin")
  .middleware("auth");
