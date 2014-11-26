(function(addPostController) {
    "use strict";

    var routes = require("../../routes");
    var routeUtilities = require("../utilities/routeUtilities");

    addPostController.init = function(app) {
        app.get(routes.admin.addPost, function(request, response) {
            routeUtilities.renderAdminView(response, "addPost");
        });
    };
}(module.exports));
