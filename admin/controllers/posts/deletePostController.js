var routes = require("../../../routes"),
    data = require("../../../data");

module.exports = {
    init: init
};

function init(app) {
    app.get(routes.admin.deletePost, function(request, response) {
        data.posts.remove(request.params.id).then(function() {
            request.flash("post-saved", "Blog Post successfully deleted.");
            response.redirect(routes.admin.overview);
        });
    });
}
