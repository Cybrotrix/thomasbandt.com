var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.about, function(request, response) {
        app.renderBlogView(response, "about");
    });
}
