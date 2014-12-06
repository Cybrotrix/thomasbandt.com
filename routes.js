var blogRoot = "";
var adminRoot = "/admin";

var routes = {
    admin: {
        index:          adminRoot,
        addPost:        adminRoot + "/posts/add",
        editPost:       adminRoot + "/posts/edit/:id",
        deletePost:     adminRoot + "/posts/delete/:id",
        login:          adminRoot + "/login",
        logout:         adminRoot + "/logout",
        overview:       adminRoot + "/posts",
        assets:         adminRoot + "/assets",
        deleteAsset:    adminRoot + "/assets/delete/:id",
        uploadAsset:    adminRoot + "/assets/upload"
    },
    blog: {
        home:           blogRoot + "/",
        about:          blogRoot + "/about",
        archive:        blogRoot + "/archive",
        postDetail:     blogRoot + "/:year/:month/:day/:title",
        page:           blogRoot + "/latest/:page"
    }
};

module.exports = routes;
