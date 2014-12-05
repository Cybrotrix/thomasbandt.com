var slug = require("slug");

module.exports = {
    friendlyUrlFragment : getFriendlyUrlFragment
};

slug.defaults.charmap['ä'] = 'ae';
slug.defaults.charmap['ö'] = 'oe';
slug.defaults.charmap['ü'] = 'ue';

function getFriendlyUrlFragment(post) {
    var urlParts =
        [
            post.created.getFullYear(),
            post.created.getMonth() + 1,
            post.created.getDate(),
            slug(post.title.toLowerCase())
        ];

    return urlParts.join("/");
}
