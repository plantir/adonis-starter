/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.customResource("", "PageController");
})
  .prefix("admin/pages")
  .namespace("Admin")
  .middleware("auth");
