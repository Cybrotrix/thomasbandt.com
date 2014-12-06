var routes = require("../../routes"),
    data = require("../../data"),
    config = require("../../config"),
    routeUtils = require("../../utils/routeUtils");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.home, function(request, response) {
        renderPagedPosts(response, 1);
    });

    app.get(routes.blog.page, function(request, response) {
        renderPagedPosts(response, request.params.page);
    });

    function renderPagedPosts(response, page) {
        page = parseInt(page);

        data.posts.allPublished(page, config.blog.postsPerPage).done(function(pagedPostsResult) {
            pagedPostsResult.hasPreviousPage = page > 1;
            pagedPostsResult.hasNextPage = pagedPostsResult.pageCount > page;

            if (pagedPostsResult.hasPreviousPage) {
                if (page == 2) {
                    pagedPostsResult.previousPageUrl = routes.blog.home;
                } else {
                    pagedPostsResult.previousPageUrl = routeUtils
                        .actionLink(routes.blog.page, ":page", page - 1);
                }
            }

            if (pagedPostsResult.hasNextPage) {
                pagedPostsResult.nextPageUrl = routeUtils
                    .actionLink(routes.blog.page, ":page", page + 1);
            }

            app.renderBlogView(response, "posts", pagedPostsResult);
        });
    }
}
