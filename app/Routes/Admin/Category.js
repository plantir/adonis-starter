/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.customResource("", "CategoryController");
})
  .prefix("admin/categories")
  .namespace("Admin");
//   .middleware("auth");
