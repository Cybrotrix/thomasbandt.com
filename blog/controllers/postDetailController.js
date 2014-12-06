var routes = require("../../routes"),
    data = require("../../data"),
    routeUtils = require("../../admin/services/routeUtils"); // todo: move

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.postDetail, function(request, response) {
        var slug = routeUtils.slugFromRouteParams(request.params);

        data.posts.findOneBySlug(slug).done(function(post) {
            app.renderBlogView(response, "postDetail", {
                post: post
            });
        });
    });
}
