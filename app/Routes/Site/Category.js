/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.group(() => {
  Route.get("", "CategoryController.index");
  Route.get("/:slug", "CategoryController.show");
})
  .namespace("Site")
  .prefix("categories");
