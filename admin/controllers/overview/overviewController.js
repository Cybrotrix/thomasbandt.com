var routes = require("../../../routes"),
    data = require("../../../data");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.overview, function(request, response) {
        data.posts.all().then(function(posts) {
            app.renderAdminView(response, "overview", {
                message: request.flash("post-saved"),
                posts: posts
            });
        });
    });
}
