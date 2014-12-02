var routes = require("../../routes"),
    routeUtilities = require("../utilities/routeUtilities"),
    data = require("../../data"),
    markdown = require("markdown").markdown;

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.editPost, function(request, response) {
        data.posts.find(request.params.id).then(function(post) {
            routeUtilities.renderAdminView(response, "editPost", {
                post: post
            });
        });
    });
}
