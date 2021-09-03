/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.customResource("", "BrandController");
})
  .prefix("admin/brands")
  .namespace("Admin")
  .middleware("auth");
