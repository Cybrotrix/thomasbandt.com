var friendlyUrl = require("friendly-url");

module.exports = {
    friendlyUrlFragment : getFriendlyUrlFragment
};

function getFriendlyUrlFragment(post) {
    var urlParts =
        [
            post.created.getFullYear(),
            post.created.getMonth() + 1,
            post.created.getDate() ,
            friendlyUrl(post.title, post.title.length * 2)
        ];

    return urlParts.join("/");
}
