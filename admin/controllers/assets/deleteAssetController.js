var config = require("../../../config"),
    routes = require("../../../routes"),
    routeUtilities = require("../../utilities/routeUtilities"),
    data = require("../../../data");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.deleteAsset, function(request, response) {
        data.assets.remove(request.params.id).then(function() {
            request.flash("asset-message", "File successfully deleted.");
            response.redirect(routes.admin.assets);
        });
    });
}
