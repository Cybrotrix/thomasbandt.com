var routes = require("../../routes"),
    config = require("../../config"),
    Feed = require("rss");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.feed, function(request, response) {
        var feed = new Feed({
            title: config.metadata.blogName,
            feed_url: config.blog.siteRootUrl + routes.blog.feed,
            site_url: config.blog.siteRootUrl
        });

        response.setHeader("Content-Type", "application/rss+xml");
        response.send(feed.xml("\t"));
    });
}
