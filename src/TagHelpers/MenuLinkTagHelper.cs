using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Blog.TagHelpers
{
    [HtmlTargetElement("menuLink", Attributes = "title, controller, action")]
    public class MenuLinkTagHelper : TagHelper
    {
        private readonly IUrlHelperFactory _urlHelperFactory;

        public string Title { get; set; }
        public string Controller { get; set; }
        public string Action { get; set; }

        [ViewContext]
        public ViewContext Context { get; set; }

        public MenuLinkTagHelper(IUrlHelperFactory urlHelperFactory)
        {
            _urlHelperFactory = urlHelperFactory;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            IUrlHelper urlHelper = _urlHelperFactory.GetUrlHelper(Context);
            string href = urlHelper.Action(Action, Controller);

            output.TagName = "a";
            output.TagMode = TagMode.StartTagAndEndTag;

            output.Attributes.Add("title", Title);
            output.Attributes.Add("href", href);

            var routeData = Context.RouteData.Values;
            var currentController = routeData["controller"] as string;
            var currentAction = routeData["action"] as string;

            if (string.Equals(Action, currentAction, StringComparison.OrdinalIgnoreCase) &&
                string.Equals(Controller, currentController, StringComparison.OrdinalIgnoreCase))
            {
                output.Attributes.Add("class", "active");
            }

            output.Content.SetContent(Title);
        }
    }
}