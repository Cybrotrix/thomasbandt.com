(function(admin) {
    "use strict";

    var _loginController = require("./controllers/loginController");

    var renderAdminView = function(response, viewName, model) {
        model = model ? model : {};
        model.layout = "../../admin/views/_layout";

        response.render("../admin/views/" + viewName, model);
    };

    admin.init = function(app) {
        _loginController.init(app, renderAdminView);
    };

    admin.services = {
        userValidator: require("./services/userValidator")
    };
}(module.exports));
