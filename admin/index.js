(function(admin) {
    "use strict";

    var loginController = require("./controllers/loginController");

    var renderAdminView = function(response, viewName, model) {
        model = model ? model : {};
        model.layout = "../../admin/views/_layout";

        response.render("../admin/views/" + viewName, model);
    };

    admin.init = function(app) {
        loginController.init(app, renderAdminView);
    };
}(module.exports));
