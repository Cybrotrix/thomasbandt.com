(function(loginController) {
    "use strict";

    var passport = require("passport");
    var routes = require("../../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    loginController.init = function(app) {
        app.get(routes.admin.login, function(request, response) {
            routeUtilities.renderAdminView(response, "login", {
                message: request.flash('error')
            });
        });

        app.post(routes.admin.login,
            passport.authenticate('local', {
                successRedirect: routes.admin.overview,
                failureRedirect: routes.admin.login,
                failureFlash: true
            })
        );
    };
}(module.exports));
