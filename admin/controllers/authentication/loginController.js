var passport = require("passport"),
    routes = require("../../../routes"),
    routeUtilities = require("../../utilities/routeUtilities");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.login, function(request, response) {
        if (request.isAuthenticated()) {
            response.redirect(routes.admin.overview);
            return;
        }

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
}
