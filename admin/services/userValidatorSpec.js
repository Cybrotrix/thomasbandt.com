var expect = require("chai").expect;

describe("UserValidator", function() {
    describe("When calling validateLogin", function() {
        var _userValidator;

        before(function() {
            _userValidator = require("./userValidator");
        });

        it("returns an error message, when the user name is incorrect", function(done) {
            _userValidator.validateLogin("wrong_username", "test").done(function(result) {
                expect(result.errorMessage).to.have.string("user name");
                done();
            }, done);
        });

        it("returns an error message, when the password is incorrect", function(done) {
            _userValidator.validateLogin("admin", "wrong_password").done(function(result) {
                expect(result.errorMessage).to.have.string("password");
                done();
            }, done);
        });

        it("returns the admin user, when the credentials are correct", function(done) {
            _userValidator.validateLogin("admin", "test").done(function(result) {
                expect(result.user.userName).be.equal("admin");
                done();
            }, done);
        });
    });
});

