var routes = require("../../routes"),
    data = require("../../data"),
    config = require("../../config");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.home, function(request, response) {
        data.posts.allPublished(1, config.blog.postsPerPage).done(function(pagedPostsResult) {
            app.renderBlogView(response, "posts", pagedPostsResult);
        });
    });

    app.get(routes.blog.page, function(request, response) {
        data.posts.allPublished(request.params.page, config.blog.postsPerPage).done(function(pagedPostsResult) {
            app.renderBlogView(response, "posts", pagedPostsResult);
        });
    });
}
