(function(addPostController) {
    "use strict";

    var routes = require("../../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    addPostController.init = function(app) {
        app.get(routes.admin.addPost, routeUtilities.authenticate, function(request, response) {
            routeUtilities.renderAdminView(response, "addPost");
        });

        app.post(routes.admin.addPost, routeUtilities.authenticate, function(request, response) {
            request.flash("post-added", "Blog Post successfully added.");
            response.redirect(routes.admin.overview);
        });
    };
}(module.exports));
