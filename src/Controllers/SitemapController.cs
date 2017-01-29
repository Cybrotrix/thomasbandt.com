using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class SitemapController : Controller
    {
        [Route("/sitemap.xml")]
        public IActionResult Sitemap() => Json("Here comes the Sitemap some day.");
    }
}
