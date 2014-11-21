(function() {
    "use strict";

    var expect = require("chai").expect;

    var User = require("../model/user");

    describe("UserValidator", function() {
        describe("When calling validateLogin", function() {
            var _userValidator;

            before(function() {
                var hashedPassword = "$2a$10$l69mRxfKt2C3FV19vzSFbucJVn43cEE8mPwz9CAIdRxNsrpwb5Khi"; // = test
                var mockAdminUser = new User("Max", hashedPassword);

                _userValidator = require("./userValidator");
                _userValidator.init(mockAdminUser);
            });

            it("returns an error message, when the user name is incorrect", function(done) {
                _userValidator.validateLogin("Someone", "test").done(function(result) {
                    expect(result.errorMessage).to.have.string("user name");
                    done();
                }, done);
            });

            it("returns an error message, when the password is incorrect", function(done) {
                _userValidator.validateLogin("Max", "wrong_password").done(function(result) {
                    expect(result.errorMessage).to.have.string("password");
                    done();
                }, done);
            });

            it("returns the admin user, when the credentials are correct", function(done) {
                _userValidator.validateLogin("Max", "test").done(function(result) {
                    expect(result.user.userName).be.equal("Max");
                    done();
                }, done);
            });
        });
    });
}());

