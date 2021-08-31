/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.group(() => {
  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  Route.post("refresh", "AuthController.refresh");
  Route.get("info", "AuthController.info").middleware("auth");
})
  .prefix("admin/auth")
  .namespace("Admin");
