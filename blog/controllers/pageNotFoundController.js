var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.pageNotFound, function(request, response) {
        app.renderBlogView(response, "404");
    });
}
