var config = {
    debug: {
        enabled: true,
        database: {
            connectionString: "mongodb://localhost:27017/node-simple-blog-dev",
            databaseName: "node-simple-blog-dev"
        }
    },
    metadata: {
        blogName: "Simpe Blog"
    },
    admin: {
        credentials: {
            userName: "admin",
            hashedPassword: "$2a$10$l69mRxfKt2C3FV19vzSFbucJVn43cEE8mPwz9CAIdRxNsrpwb5Khi"
        }
    },
    database: {
        connectionString: "mongodb://localhost:27017/node-simple-blog",
        databaseName: "node-simple-blog"
    }
};

module.exports = config;
