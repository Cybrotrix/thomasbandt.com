var blogRoot = "/";
var adminRoot = "/admin/";

var routes = {
    admin: {
        index:          adminRoot,
        addPost:        adminRoot + "posts/add",
        editPost:       adminRoot + "posts/edit/:id",
        deletePost:     adminRoot + "posts/delete/:id",
        login:          adminRoot + "login",
        logout:         adminRoot + "logout",
        overview:       adminRoot + "posts",
        assets:         adminRoot + "assets",
        deleteAsset:    adminRoot + "assets/delete/:id",
        uploadAsset:    adminRoot + "assets/upload"
    },
    blog: {
        home:           blogRoot,
        about:          blogRoot + "about",
        archive:        blogRoot + "archive",
        contact:        blogRoot + "contact",
        feed:           blogRoot + "feed",
        page:           blogRoot + "latest/:page",
        postDetail:     blogRoot + "*",
        sitemap:        blogRoot + "sitemap.xml"
    }
};

module.exports = routes;
