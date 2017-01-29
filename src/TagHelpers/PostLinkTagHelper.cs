using Blog.Model;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Blog.TagHelpers
{
    [HtmlTargetElement("postLink", Attributes = "post")]
    public class PostLinkTagHelper : TagHelper
    {
        public Post Post { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "a";
            output.TagMode = TagMode.StartTagAndEndTag;

            output.Attributes.Add("title", Post.Title);
            output.Attributes.Add("href", $"/{Post.Slug}");
        }
    }
}
