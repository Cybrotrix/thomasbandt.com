var config = require("../../../config"),
    routes = require("../../../routes"),
    routeUtilities = require("../../utilities/routeUtilities"),
    data = require("../../../data")
    _ = require("underscore");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.assets, function(request, response) {
        data.assets.all().done(function(files) {
            var sortedFiles = _.sortBy(files, function(file) {
                return file.created * -1;
            });

            routeUtilities.renderAdminView(response, "assets", {
                files: sortedFiles,
                message: request.flash("asset-message")
            });
        });
    });
}
