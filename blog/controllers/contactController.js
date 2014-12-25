var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.contact, function(request, response) {
        app.renderBlogView(response, "contact");
    });

    app.get(routes.blog.imprint, function(request, response) {
        app.renderBlogView(response, "imprint");
    });

    app.get(routes.blog.privacy, function(request, response) {
        app.renderBlogView(response, "privacy");
    });
}
