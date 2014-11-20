require("should");

module.exports = function(userName, hashedPassword) {
    userName.should.be.ok;
    hashedPassword.should.be.ok;

    return {
        userName: userName,
        hashedPassword: hashedPassword
    };
};