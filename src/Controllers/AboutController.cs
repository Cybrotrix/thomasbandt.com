using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class AboutController : Controller
    {
        [Route("/about")]
        public IActionResult About()
        {
            return View();
        }
    }
}
