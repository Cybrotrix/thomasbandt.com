using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
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
