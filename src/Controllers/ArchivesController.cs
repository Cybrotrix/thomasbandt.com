using System.Linq;
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
            var groupedPosts = _posts.All()
                .Where(p => p.IsPublished)
                .GroupBy(p => p.PublishingDate.Year)
                .OrderByDescending(g => g.Key);

            return View(groupedPosts);
        }
    }
}
