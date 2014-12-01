var routes = require("../../routes");

module.exports = {
    renderAdminView: renderAdminView
};

function renderAdminView(response, viewName, model) {
    model = model || {};
    model.layout = "../../admin/views/_layout";

    response.render("../admin/views/" + viewName, model);
}
