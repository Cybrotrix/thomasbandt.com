(function(loginController) {
    "use strict";

    var passport = require("passport");
    var routes = require("../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    loginController.init = function(app, renderAdminView) {
        app.get(routes.index, routeUtilities.authenticate, function(request, response) {
            renderAdminView(response, "index", {
                userName: request.user.username
            });
        });

        app.get(routes.login, function(request, response) {
            renderAdminView(response, "login", {
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

        app.get(routes.logout, routeUtilities.authenticate, function(request, response) {
            request.logout();
            response.redirect("/admin/login");
        });
    };
}(module.exports));
