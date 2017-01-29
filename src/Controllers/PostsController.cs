using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class PostsController : Controller
    {
        [Route("")]
        public IActionResult List()
        {
            return View();
        }

        [Route("/posts/404")]
        public IActionResult Detail()
        {
            return View("PageNotFound");
        }
    }
}
