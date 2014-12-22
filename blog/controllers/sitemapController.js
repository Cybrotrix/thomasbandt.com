var routes = require("../../routes"),
    data = require("../../data"),
    config = require("../../config"),
    routeUtils = require("../../utils/routeUtils"),
    sitemap = require("sitemap-xml");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.sitemap, function(request, response) {
        var stream = sitemap();
        stream.pipe(response);

        addStaticRoute(stream, routes.blog.about);
        addStaticRoute(stream, routes.blog.contact);
        addStaticRoute(stream, routes.blog.home);
        addStaticRoute(stream, routes.blog.archive);

        stream.end();
    });

    function addStaticRoute(stream, route) {
        stream.write({ loc: config.blog.siteRootUrl + route });
    }
}
