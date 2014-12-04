var friendlyUrl = require("friendly-url");

module.exports = {
    friendlyUrlFragment : getFriendlyUrlFragment
};

function getFriendlyUrlFragment(post) {
    var urlParts =
        [
            post.created.getYear().toString(),
            post.created.getMonth().toString(),
            post.created.getDay().toString(),
            friendlyUrl(post.title)
        ];

    return urlParts.join("/");
}
