(function() {
    "use strict";

    var should = require("should");

    describe("UserValidator", function() {
        describe("When calling validateLogin", function() {
            var _userValidator;

            before(function() {
                _userValidator = require("./userValidator");

                var mockAdminUser = {
                    userName: "Max",
                    hashedPassword: "foo"
                }
            });

            it("returns an error message, when the user name is incorrect", function() {
                throw "not implemented";
            });

            it("returns an error message, when the password is incorrect", function() {
                throw "not implemented";
            });

            it("returns the admin user, when the credentials are correct", function() {
                throw "not implemented";
            });
        });
    });
}());

