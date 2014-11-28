(function(loginController) {
    "use strict";

    var routes = require("../../routes"),
        routeUtilities = require("../utilities/routeUtilities");

    loginController.init = function(app) {
        app.get(routes.admin.overview, routeUtilities.authenticate, function(request, response) {
            routeUtilities.renderAdminView(response, "overview", {
                message: request.flash("post-added")
            });
        });
    };
}(module.exports));
