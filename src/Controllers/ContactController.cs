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
    }
}
