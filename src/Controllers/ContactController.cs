using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class ContactController : Controller
    {
        [Route("/contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [Route("/imprint")]
        public IActionResult Imprint()
        {
            return View();
        }

        [Route("/privacy")]
        public IActionResult Privacy()
        {
            return View();
        }
    }
}
