(function() {
    "use strict";

    require("should");

    var User = require("../model/user");

    describe("UserValidator", function() {
        describe("When calling validateLogin", function() {
            var _userValidator;

            before(function() {
                var mockAdminUser = new User("Max", "Foo");

                _userValidator = require("./userValidator");
                _userValidator.init(mockAdminUser);
            });

            it("returns an error message, when the user name is incorrect", function() {
                _userValidator.validateLogin("Someone", "Bar").then(function(result) {
                    (result.user == null).should.be.true;

                    (result.errorMessage == null).should.not.be.true;
                    result.errorMessage.should.contain("user name");
                });
            });

            it("returns an error message, when the password is incorrect", function() {
                _userValidator.validateLogin("Someone", "Bar").then(function(result) {
                    result.user.should.not.be.ok;
                    result.errorMessage.should.contain("password");
                });
            });

            it("returns the admin user, when the credentials are correct", function() {
                _userValidator.validateLogin("Max", "Foo").then(function(result) {
                    result.user.should.be.ok;
                    result.errorMessage.should.not.be.ok;
                });
            });
        });
    });
}());

