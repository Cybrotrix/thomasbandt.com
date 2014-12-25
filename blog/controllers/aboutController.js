var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.blog.about, function(request, response) {
        request.app.locals.hideProfilePicture = true;

        app.renderBlogView(response, "about");
    });
}
