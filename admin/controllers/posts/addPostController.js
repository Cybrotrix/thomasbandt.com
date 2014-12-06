var routes = require("../../../routes"),
    data = require("../../../data"),
    routeUtils = require("../../services/routeUtils"),
    markdown = require("markdown").markdown;

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.addPost, function(request, response) {
        app.renderAdminView(response, "addPost");
    });

    app.post(routes.admin.addPost, function(request, response) {
        var post = {
            title: request.body.title,
            abstract: request.body.abstract,
            content: request.body.content,
            contentHtml: markdown.toHTML(request.body.content),
            date: new Date(),
            published: request.body.published || false
        };

        post.slugFromPost = routeUtils.slugFromPost(post);

        data.posts.add(post).done(function() {
            request.flash("post-saved", "Blog Post successfully added.");
            response.redirect(routes.admin.overview);
        });
    });
}
