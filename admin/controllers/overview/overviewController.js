var routes = require("../../../routes"),
    routeUtilities = require("../../utilities/routeUtilities"),
    data = require("../../../data");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.overview, function(request, response) {
        data.posts.all().then(function(posts) {
            routeUtilities.renderAdminView(response, "overview", {
                message: request.flash("post-saved"),
                posts: posts
            });
        });
    });
}
