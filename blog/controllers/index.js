var routes = require("../../routes");

module.exports = {
    init: init
};

function init(app) {
    app.renderBlogView = renderView;

    require("./aboutController").init(app);
    require("./postDetailController").init(app);
    require("./postsController").init(app);
}

function renderView(response, viewName, model) {
    model = model || {};
    model.layout = "../../blog/views/_layout";

    response.render("../blog/views/" + viewName, model);
}