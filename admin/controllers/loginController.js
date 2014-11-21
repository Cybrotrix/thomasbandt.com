(function(loginController) {
    "use strict";

    var passport = require("passport");

    function authenticate(request, response, next) {
        if (request.isAuthenticated()) {
            next()
            return;
        }

        response.redirect("/admin/login");
    };

    loginController.init = function(app, renderAdminView) {
        app.get("/admin", authenticate, function(request, response) {
            renderAdminView(response, "index", {
                userName: request.user.username
            });
        });

        app.get("/admin/login", function(request, response) {
            renderAdminView(response, "login", {
                message: request.flash('error')
            });
        });

        app.post('/admin/login',
            passport.authenticate('local', {
                successRedirect: '/admin',
                failureRedirect: '/admin',
                failureFlash: true
            })
        );
    };
}(module.exports));
