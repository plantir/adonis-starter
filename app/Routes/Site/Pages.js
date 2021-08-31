/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.get(":slug", "PageController.show");
})
  .prefix("pages")
  .namespace("Site");
