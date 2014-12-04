var slug = require("slug");

module.exports = {
    friendlyUrlFragment : getFriendlyUrlFragment
};

function getFriendlyUrlFragment(post) {
    var urlParts =
        [
            post.created.getFullYear(),
            post.created.getMonth() + 1,
            post.created.getDate() ,
            slug(post.title).toLowerCase()
        ];

    return urlParts.join("/");
}
