var routes = require("../../routes"),
    routeUtilities = require("../utilities/routeUtilities"),
    data = require("../../data");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.addPost, routeUtilities.authenticate, function(request, response) {
        routeUtilities.renderAdminView(response, "addPost");
    });

    app.post(routes.admin.addPost, routeUtilities.authenticate, function(request, response) {
        var post = {
            title: request.body.title,
            abstract: request.body.abstract,
            content: request.body.content,
            contentHtml: "foo",
            published: request.body.published || false
        };

        data.posts.save(post).done(function() {
            request.flash("post-added", "Blog Post successfully added.");
            response.redirect(routes.admin.overview);
        });
    });
}
