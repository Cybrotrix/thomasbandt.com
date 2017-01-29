using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class ContactController : Controller
    {
        [Route("/contact")]
        public IActionResult Contact() => View();

        [Route("/imprint")]
        public IActionResult Imprint() => View();

        [Route("/privacy")]
        public IActionResult Privacy() => View();
    }
}
