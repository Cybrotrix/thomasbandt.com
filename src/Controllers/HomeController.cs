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
    }
}
