(function(repository) {
    "use strict";

    var q = require("q"),
        config = require("../config"),
        mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var BlogPost = mongoose.model('BlogPost', new Schema({
        title: String,
        abstract: String,
        content: String,
        contentHtml: String,
        date: { type: Date, default: Date.now },
        published: Boolean
    }));

    repository.save = function(post) {
        var dbBlogPost = new BlogPost({
            title: post.title,
            abstract: post.abstract,
            content: post.content,
            contentHtml: post.contentHtml,
            date: post.date,
            published: post.published
        });

        var deferred = q.defer();

        var db = mongoose.connection;
        db.on("error", deferred.reject);
        db.on("open", function() {
            dbBlogPost.save(function (error, result) {
                if (error) {
                    deferred.reject(error);
                    return;
                }

                post.id = result.id;
                deferred.resolve(post);
            });
        });

        mongoose.connect(config.database.connectionString);

        return deferred.promise;
    };

    repository.find = function(id) {
        var deferred = q.defer();

        BlogPost.find({ id: id }, function (error, result) {
            if (error) {
                deferred.reject(error);
                return;
            }

            // todo: refactor
            deferred.resolve({
                id: id,
                title: result.title,
                abstract: result.abstract,
                content: result.content,
                contentHtml: result.contentHtml,
                date: result.date,
                published: result.published
            });
        })

        return deferred.promise;
    }
}(module.exports));
