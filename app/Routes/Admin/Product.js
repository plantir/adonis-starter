/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.customResource("", "ProductController");
})
  .prefix("admin/products")
  .namespace("Admin");
//   .middleware("auth");
