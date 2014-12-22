var routes = require("../../routes"),
    data = require("../../data"),
    moment = require("moment"),
    routeUtils = require("../../utils/routeUtils");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.postDetail, function(request, response) {
        var slug = routeUtils.slugFromRouteParams(request.params);

        data.posts.findOneBySlug(slug)
            .then(function(post) {
                if (post.published) {
                    post.dateFormatted = moment(post.date).format("MMMM Do YYYY");

                    app.renderBlogView(response, "postDetail", {
                        post: post
                    });
                } else {
                    app.render404(response);
                }
            })
            .catch(function() {
                app.render404(response);
            });
    });
}
