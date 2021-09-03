/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.get("", "BrandController.index");
})
  .prefix("brands")
  .namespace("Site");
