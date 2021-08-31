/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("BaseRoute");
Route.group(() => {
  Route.get("", "SettingController.getSetting");
  Route.put("", "SettingController.changeSetting");
})
  .prefix("admin/settings")
  .namespace("Admin")
  .middleware("auth");
