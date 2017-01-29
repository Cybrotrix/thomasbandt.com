using Blog.Model;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class PostsController : Controller
    {
        private readonly IPosts _posts;

        public PostsController(IPosts posts)
        {
            _posts = posts;
        }

        [Route("")]
        public IActionResult List() => View();

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
                    return View("~/Views/Posts/Detail.cshtml", post);
                }
            }

            return View("PageNotFound");
        }
    }
}
