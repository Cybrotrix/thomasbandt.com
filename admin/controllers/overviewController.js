var routes = require("../../routes"),
    routeUtilities = require("../utilities/routeUtilities");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.overview, function(request, response) {
        routeUtilities.renderAdminView(response, "overview", {
            message: request.flash("post-added")
        });
    });
}
