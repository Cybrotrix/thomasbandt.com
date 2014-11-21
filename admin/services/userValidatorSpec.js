(function() {
    "use strict";

    var expect = require("chai").expect;

    var User = require("../model/user");

    describe("UserValidator", function() {
        describe("When calling validateLogin", function() {
            var _userValidator;

            before(function() {
                var mockAdminUser = new User("Max", "Foo");

                _userValidator = require("./userValidator");
                _userValidator.init(mockAdminUser);
            });

            it("returns an error message, when the user name is incorrect", function(done) {
                _userValidator.validateLogin("Someone", "Bar").done(function(result) {
                    throw "not implemented";
                }, done);
            });

            it("returns an error message, when the password is incorrect", function(done) {
                _userValidator.validateLogin("Someone", "Bar").done(function(result) {
                    throw "not implemented";
                }, done);
            });

            it("returns the admin user, when the credentials are correct", function(done) {
                _userValidator.validateLogin("Max", "Foo").done(function(result) {
                    throw "not implemented";
                }, done);
            });
        });
    });
}());

