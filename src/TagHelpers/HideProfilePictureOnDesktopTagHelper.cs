using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Blog.TagHelpers
{
    [HtmlTargetElement(Attributes = "hideProfilePictureOnDesktop")]
    public class HideProfilePictureOnDesktopTagHelper : TagHelper
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            const string attributeName = "hideProfilePictureOnDesktop";

            TagHelperAttribute attribute;
            if (!context.AllAttributes.TryGetAttribute(attributeName, out attribute))
            {
                return;
            }

            output.Attributes.RemoveAll(attributeName);

            if (!string.IsNullOrWhiteSpace(attribute.Value as string))
            {
                output.Attributes.Add("class", "hidden-on-desktop");
            }
        }
    }
}
