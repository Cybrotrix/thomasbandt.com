var routes = {
    admin: {
        addPost: "/admin/posts/add",
        editPost: "/admin/posts/edit/:id",
        deletePost: "/admin/posts/delete/:id",
        login: "/admin/login",
        logout: "/admin/logout",
        overview: "/admin/posts",
        assets: "/admin/assets",
        deleteAsset: "/admin/assets/delete/:id"
    },
    blog: {
        home: "/"
    }
};

module.exports = routes;
