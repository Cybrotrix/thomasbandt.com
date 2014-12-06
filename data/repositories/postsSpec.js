var expect = require("chai").expect,
    q = require("q"),
    _ = require("underscore"),
    mongoose = require("mongoose"),
    BlogPost = require("../models/BlogPost");

describe("PostRepository", function() {
    var sut;

    before(function() {
        sut = require("./posts");
        require("../database");
    });

    describe("When adding a new blog post", function() {
        it("saves the title", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.title = Math.random().toString(36);

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.title).to.be.equal(dummyPost.title);
                        done();
                    }, done);
                }, done);
        });

        it("saves the abstract", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.abstract = Math.random().toString(36);

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.abstract).to.be.equal(dummyPost.abstract);
                        done();
                    }, done);
                }, done);
        });

        it("saves the content", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.content = Math.random().toString(36);

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.content).to.be.equal(dummyPost.content);
                        done();
                    }, done);
                }, done);
        });

        it("saves the content html", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.contentHtml = Math.random().toString(36);

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.contentHtml).to.be.equal(dummyPost.contentHtml);
                        done();
                    }, done);
                }, done);
        });

        it("saves the slug", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.slug = Math.random().toString(36);

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.slug).to.be.equal(dummyPost.slug);
                        done();
                    }, done);
                }, done);
        });

        it("saves the creation date", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.date = new Date(2000, 11, 31);

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.date.getTime()).to.be.equal(dummyPost.date.getTime());
                        done();
                    }, done);
                }, done);
        });

        it("saves the publishing flag", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.published = true;

            sut.add(dummyPost)
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.published).to.be.true();
                        done();
                    }, done);
                }, done);
        });

        it("assigns an id", function(done) {
            sut.add(getDummyPost())
                .then(function(post) {
                    return post.id;
                })
                .done(function(id) {
                    sut.findOneById(id).done(function(post) {
                        expect(post.id).to.be.ok();
                        done();
                    }, done);
                }, done);
        });
    });

    describe("When looking for a post by its slug", function() {
        it("it is returned when found", function (done) {
            var dummyPost = getDummyPost();
            dummyPost.slug = Math.random().toString(36);

            sut.add(dummyPost)
                .done(function () {
                    sut.findOneBySlug(dummyPost.slug).done(function (post) {
                        expect(post.slug).to.be.equal(dummyPost.slug);
                        done();
                    }, done);
                }, done);
        });
    });

    describe("When requesting all blog posts", function() {
        it("will deliver all existing blog posts", function(done) {
            var dummyPost1 = getDummyPost();
            dummyPost1.title = Math.random().toString(36);

            var dummyPost2 = getDummyPost();
            dummyPost2.title = dummyPost1.title;

            sut.add(dummyPost1)
                .then(function() {
                    return sut.add(dummyPost2);
                })
                .then(sut.all)
                .done(function(posts) {
                    var count = _.filter(posts, function(post) {
                        return post.title === dummyPost1.title;
                    }).length;

                    expect(count).to.equal(2);

                    done();
                }, done);
        });
    });

    describe("When requesting published blog posts", function() {
        it("will return the first 5 of 6 posts on page 1", function(done) {
            removeAllExistingBlogPosts().done(function() {
                addDummyPosts(sut, 6).done(function() {
                    sut.allPublishedPaged(1, 5).done(function(result) {
                        expect(result.posts.length).to.be.equal(5);
                        done();
                    }, done);
                });
            });
        });

        it("will return the 6th of 6 posts on page 2", function(done) {
            removeAllExistingBlogPosts().done(function() {
                addDummyPosts(sut, 6).done(function() {
                    sut.allPublishedPaged(2, 5).done(function(result) {
                        expect(result.posts.length).to.be.equal(1);
                        done();
                    }, done);
                });
            });
        });

        it("will return the total count of posts found", function(done) {
            removeAllExistingBlogPosts().done(function() {
                addDummyPosts(sut, 9).done(function() {
                    sut.allPublishedPaged(1, 5).done(function(result) {
                        expect(result.postCount).to.be.equal(9);
                        done();
                    }, done);
                });
            });
        });

        it("will return the total number of pages", function(done) {
            removeAllExistingBlogPosts().done(function() {
                addDummyPosts(sut, 9).done(function() {
                    sut.allPublishedPaged(1, 5).done(function(result) {
                        expect(result.pageCount).to.be.equal(2);
                        done();
                    }, done);
                });
            });
        });

        it("will not return unpublished posts", function(done) {
            removeAllExistingBlogPosts().done(function() {
                addDummyPosts(sut, 9).done(function() {
                    var unpublishedDummyPost = getDummyPost();
                    unpublishedDummyPost.published = false;

                    sut.add(unpublishedDummyPost).done(function() {
                        sut.allPublishedPaged(1, 5).done(function(result) {
                            expect(result.postCount).to.be.equal(9);
                            done();
                        }, done);
                    });
                });
            });
        });
    });

    describe("When removing a blog post", function() {
       it("gets deleted from the database", function(done) {
           var postId;

           sut.add(getDummyPost())
               .then(function(post) {
                   postId = post.id;
                   return sut.remove(post.id);
               })
               .then(function() {
                  return sut.findOneById(postId);
               })
               .done(function(post) {
                   expect(post).to.be.null();
                   done();
               }, done);
       });
    });

    describe("When updating a blog post", function() {
        it("updates the title", function(done) {
            var randomTitle = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.title = randomTitle;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.title).to.be.equal(randomTitle);
                    done();
                }, done);
        });

        it("updates the abstract", function(done) {
            var randomAbstract = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.abstract = randomAbstract;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.abstract).to.be.equal(randomAbstract);
                    done();
                }, done);
        });

        it("updates the content", function(done) {
            var randomContent = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.content = randomContent;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.content).to.be.equal(randomContent);
                    done();
                }, done);
        });

        it("updates the content html", function(done) {
            var randomHtml = Math.random().toString(36);

            sut.add(getDummyPost())
                .then(function(post) {
                    post.contentHtml = randomHtml;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.contentHtml).to.be.equal(randomHtml);
                    done();
                }, done);
        });

        it("updates the publishing flag", function(done) {
            var dummyPost = getDummyPost();
            dummyPost.published = true;

            sut.add(dummyPost)
                .then(function(post) {
                    post.published = false;

                    return sut.update(post);
                })
                .done(function(updatedPost) {
                    expect(updatedPost.published).to.be.false();
                    done();
                }, done);
        });
    });
});

function removeAllExistingBlogPosts() {
    var deferred = q.defer();

    BlogPost.remove({}, function (error) {
        if (error) {
            deferred.reject(error);
        } else {
            deferred.resolve(true);
        }
    });

    return deferred.promise;
}

function addDummyPosts(sut, quantity) {
    var deferred = q.defer();

    var promises = [];

    for(var i = 0; i < quantity; i++) {
        promises.push(sut.add(getDummyPost()));
    }

    q.allSettled(promises).done(function() {
        deferred.resolve(true);
    });

    return deferred.promise;
}

function getDummyPost() {
    return {
        title: "Dummy Post Title",
        abstract: "Abstract",
        content: "Content",
        contentHtml: "Html",
        date: new Date(),
        slug: "Dummy-" + Math.random().toString(36),
        published: true
    };
}
