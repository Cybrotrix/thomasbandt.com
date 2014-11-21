(function(loginController) {
    "use strict";

    var routes = require("../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    loginController.init = function(app) {
        app.get(routes.overview, routeUtilities.authenticate, function(request, response) {
            routeUtilities.renderAdminView(response, "overview");
        });
    };
}(module.exports));
