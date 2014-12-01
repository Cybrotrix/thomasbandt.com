var routes = require("../../routes"),
    routeUtilities = require("../utilities/routeUtilities"),
    data = require("../../data"),
    markdown = require("markdown").markdown;

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.addPost, function(request, response) {
        routeUtilities.renderAdminView(response, "addPost");
    });

    app.post(routes.admin.addPost, function(request, response) {
        var post = {
            title: request.body.title,
            abstract: request.body.abstract,
            content: request.body.content,
            contentHtml: markdown.toHTML(request.body.content),
            published: request.body.published || false
        };

        data.posts.save(post).done(function() {
            request.flash("post-added", "Blog Post successfully added.");
            response.redirect(routes.admin.overview);
        });
    });
}
