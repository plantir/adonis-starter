/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.customResource("", "AttributeController");
})
  .prefix("admin/attributes")
  .namespace("Admin")
  .middleware("auth");
