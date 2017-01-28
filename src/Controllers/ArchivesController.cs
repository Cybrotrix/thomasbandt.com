using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class ArchivesController : Controller
    {
        [Route("/archives")]
        public IActionResult Archives()
        {
            return View();
        }
    }
}
