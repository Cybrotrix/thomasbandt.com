var routes = require("../../routes"),
    data = require("../../data")
    _ = require("underscore");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.archive, function(request, response) {
        data.posts.all().done(function(posts) {
            var archivePosts = _.chain(posts)
                .filter(function(post) {
                    return post.published;
                })
                .groupBy(function(post) {
                    return post.date.getFullYear();
                })
                .map(function(posts, year) {
                    return {
                        year: year,
                        posts: posts
                    }
                })
                .sortBy(function(year) {
                    return -year.year;
                })
                .value();

            app.renderBlogView(response, "archive", {
                years: archivePosts
            });
        });
    });
}
