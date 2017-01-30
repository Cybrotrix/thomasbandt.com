using Blog.Model;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class SitemapController : Controller
    {
        private readonly IPosts _posts;

        public SitemapController(IPosts posts)
        {
            _posts = posts;
        }

        [Route("/sitemap.xml")]
        public IActionResult Sitemap() => View(_posts.Published());
    }
}
