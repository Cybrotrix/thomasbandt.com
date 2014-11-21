(function(logoutController) {
    "use strict";

    var routes = require("../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    logoutController.init = function(app) {
        app.get(routes.logout, routeUtilities.authenticate, function(request, response) {
            request.logout();
            response.redirect(routes.login);
        });
    };
}(module.exports));
