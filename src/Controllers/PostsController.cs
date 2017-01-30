using System.Collections.Generic;
using System.IO;
using Blog.Model;
using CommonMark;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class PostsController : Controller
    {
        private readonly IPosts _posts;
        private readonly IHostingEnvironment _env;

        private static readonly Dictionary<int, string> _htmlCache;

        static PostsController()
        {
            _htmlCache = new Dictionary<int, string>();
        }

        public PostsController(IPosts posts, IHostingEnvironment env)
        {
            _posts = posts;
            _env = env;
        }

        [Route("")]
        [Route("/latest/{page}")]
        public IActionResult List(int? page) => View(_posts.Paged(page ?? 1));

        [Route("/posts/404")]
        public IActionResult Detail()
        {
            string slug = HttpContext.Features
                .Get<IStatusCodeReExecuteFeature>()?.OriginalPath;

            if (slug != null)
            {
                Post post = _posts.SingleOrDefault(slug.TrimStart('/'));
                if (post != null)
                {
                    post.HtmlContent = GetHtmlContent(post.Id);

                    return View("~/Views/Posts/Detail.cshtml", post);
                }
            }

            return View("PageNotFound");
        }

        public string GetHtmlContent(int postId)
        {
            string html;

            if (_htmlCache.TryGetValue(postId, out html) && !string.IsNullOrWhiteSpace(html))
            {
                return html;
            }

            string filePath = Path.Combine(_env.ContentRootPath, "Posts", $"{postId.ToString().PadLeft(4, '0')}.md");
            string markdown = System.IO.File.ReadAllText(filePath);

            html = CommonMarkConverter.Convert(markdown);

            _htmlCache[postId] = html;

            return html;
        }
    }
}
