(function(repository) {
    "use strict";

    var q = require("q"),
        mongoose = require('mongoose'),
        BlogPost = require("../models").BlogPost;

    repository.save = function(post) {
        var databasePost = new BlogPost({
            title: post.title,
            abstract: post.abstract,
            content: post.content,
            contentHtml: post.contentHtml,
            date: post.date,
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
