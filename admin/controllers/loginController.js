(function(loginController) {
    "use strict";

    var passport = require("passport");
    var routes = require("../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    loginController.init = function(app) {
        app.get(routes.login, function(request, response) {
            routeUtilities.renderAdminView(response, "login", {
                message: request.flash('error')
            });
        });

        app.post(routes.login,
            passport.authenticate('local', {
                successRedirect: '/admin',
                failureRedirect: '/admin',
                failureFlash: true
            })
        );
    };
}(module.exports));
