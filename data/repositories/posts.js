var q = require("q"),
    BlogPost = require("../models/blogPost");

module.exports = {
    add: addPost,
    all: getAllPosts,
    find: findPostById,
    remove: removePost,
    update: updatePost
};

function getAllPosts() {
    var deferred = q.defer();

    BlogPost
        .find({})
        .sort("-date")
        .exec(function(error, posts) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(posts);
            }
        });

    return deferred.promise;
}

function findPostById(id) {
    var deferred = q.defer();

    BlogPost.findById(id, function (error, post) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(post);
        }
    });

    return deferred.promise;
}

function addPost(post) {
    var databasePost = new BlogPost({
        title: post.title,
        abstract: post.abstract,
        content: post.content,
        contentHtml: post.contentHtml,
        published: post.published
    });

    var deferred = q.defer();

    databasePost.save(function (error, result) {
        if (error) {
            deferred.reject(error);
            return;
        }

        post.id = result.id;
        deferred.resolve(post);
    });

    return deferred.promise;
}

function removePost(id) {
    var deferred = q.defer();

    var query = {
        _id: id
    };

    BlogPost.remove(query, function (error, result) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(result);
        }
    });

    return deferred.promise;
}

function updatePost(post) {
    var deferred = q.defer();

    var query = {
        _id: post.id
    };

    var update = {
        title: post.title,
        abstract: post.abstract,
        content: post.content,
        contentHtml: post.contentHtml,
        published: post.published
    };

    BlogPost.findOneAndUpdate(query, update, function (error, post) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(post);
        }
    });

    return deferred.promise;
}