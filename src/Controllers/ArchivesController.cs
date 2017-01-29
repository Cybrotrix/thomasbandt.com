using Blog.Model;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class ArchivesController : Controller
    {
        private readonly IPosts _posts;

        public ArchivesController(IPosts posts)
        {
            _posts = posts;
        }

        [Route("/archives")]
        public IActionResult Archives()
        {
            return View(_posts.Archive());
        }
    }
}
