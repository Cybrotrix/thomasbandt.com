using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        public IActionResult Home()
        {
            return View();
        }

        [Route("/error/404")]
        public IActionResult PageNotFound()
        {
            return View();
        }
    }
}
