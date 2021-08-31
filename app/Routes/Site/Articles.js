/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.get("", "ArticleController.index");
})
  .prefix("articles")
  .namespace("Site");
