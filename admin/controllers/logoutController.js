(function(logoutController) {
    "use strict";

    var routes = require("../../routes"),
        routeUtilities = require("../utilities/routeUtilities");

    logoutController.init = function(app) {
        app.get(routes.admin.logout, routeUtilities.authenticate, function(request, response) {
            request.logout();
            response.redirect(routes.admin.login);
        });
    };
}(module.exports));
