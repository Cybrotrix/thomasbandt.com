(function(loginController) {
    "use strict";

    var passport = require("passport");

    loginController.init = function(app, renderAdminView) {
        app.get("/admin", function(request, response) {
            renderAdminView(response, "login", {
                message: request.flash('error')
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
