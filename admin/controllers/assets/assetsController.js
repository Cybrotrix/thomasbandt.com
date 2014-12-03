var config = require("../../../config"),
    routes = require("../../../routes"),
    routeUtilities = require("../../utilities/routeUtilities"),
    data = require("../../../data");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.assets, function(request, response) {
        data.assets.all().done(function(files) {
            routeUtilities.renderAdminView(response, "assets", {
                files: files,
                message: request.flash("asset-message")
            });
        });
    });
}
