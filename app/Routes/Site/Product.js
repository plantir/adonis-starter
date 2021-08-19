/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.group(() => {
  Route.get("", "ProductController.index");
  Route.get("/:slug", "ProductController.show");
})
  .namespace("Site")
  .prefix("products");
