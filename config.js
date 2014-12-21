var config = {
    admin: {
        credentialsPath: "/Users/Thomas/blog-credentials.json"
    },
    assets: {
        uploadFolder: __dirname + "/upload/",
        webPath: "http://localhost:6969/upload/"
    },
    blog: {
        name: "Thomas Bandt",
        description: "The personal Blog of Thomas Bandt.",
        postsPerPage: 10,
        postsInFeed: 10,
        siteRootUrl: "http://localhost:7000",
        sitePort: 7000
    },
    database: {
        connectionString: "mongodb://127.0.0.1:27017/blog-thomasbandt-com",
        databaseName: "blog-thomasbandt-com",
        userName: null,
        password: null
    },
    debug: {
        database: {
            connectionString: "mongodb://127.0.0.1:27017/blog-thomasbandt-com-tests",
            databaseName: "blog-thomasbandt-com-tests",
            userName: null,
            password: null
        }
    }
};

module.exports = config;
