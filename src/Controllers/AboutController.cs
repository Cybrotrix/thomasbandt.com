using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class AboutController : Controller
    {
        [Route("/about")]
        public IActionResult About() => View();
    }
}
