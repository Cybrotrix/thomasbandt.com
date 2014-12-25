var routes = require("../../routes"),
    data = require("../../data"),
    moment = require("moment"),
    _ = require("underscore");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.archives, function(request, response) {
        data.posts.all().done(function(posts) {
            var archive = _.chain(posts)
                .each(function(post) {
                    post.dateFormatted = moment(post.date).format("MMM Do YYYY");
                })
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
                    };
                })
                .sortBy(function(year) {
                    return -year.year;
                })
                .value();

            app.renderBlogView(response, "archives", {
                archive: archive
            });
        });
    });
}
