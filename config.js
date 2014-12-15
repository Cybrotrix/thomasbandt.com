var config = {
    admin: {
        credentials: {
            userName: "admin",
            hashedPassword: "$2a$10$l69mRxfKt2C3FV19vzSFbucJVn43cEE8mPwz9CAIdRxNsrpwb5Khi" // = test
        }
    },
    assets: {
        uploadFolder: __dirname + "/upload/",
        webPath: "http://localhost:6969/upload/"
    },
    blog: {
        name: "Simple Blog",
        description: "A simple blog application running the MEAN stack.",
        postsPerPage: 10,
        postsInFeed: 10,
        siteRootUrl: "http://localhost:6969"
    },
    database: {
        connectionString: "mongodb://127.0.0.1:27017/node-simple-blog",
        databaseName: "node-simple-blog",
        userName: null,
        password: null
    },
    debug: {
        database: {
            connectionString: "mongodb://127.0.0.1:27017/node-simple-blog-dev",
            databaseName: "node-simple-blog-dev",
            userName: null,
            password: null
        }
    }
};

module.exports = config;
