var routes = require("../../../routes"),
    routeUtilities = require("../../utilities/routeUtilities");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.assets, function(request, response) {
        routeUtilities.renderAdminView(response, "assets");
    });
}
