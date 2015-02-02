var routes = require("../../routes"),
    config = require("../../config"),
    data = require("../../data"),
    routeUtils = require("../../utils/routeUtils"),
    Feed = require("rss");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.feed, function(request, response) {
        data.posts.allPublishedLimited(config.blog.postsInFeed).done(function(posts) {
            var feed = new Feed({
                title: config.blog.name,
                feed_url: config.blog.siteRootUrl + routes.blog.feed,
                site_url: config.blog.siteRootUrl
            });

            posts.forEach(function(post) {
                feed.item({
                    title: post.title,
                    description: "<p>" + post.abstract + "</p>" + post.contentHtml,
                    date: post.date,
                    url: config.blog.siteRootUrl + routeUtils.postLink(post.slug)
                });
            });

            response.setHeader("Content-Type", "application/rss+xml");
            response.send(feed.xml("\t"));
        });
    });
}
