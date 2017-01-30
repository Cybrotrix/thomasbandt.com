using Blog.Model;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class FeedController : Controller
    {
        private readonly IPosts _posts;

        public FeedController(IPosts posts)
        {
            _posts = posts;
        }

        [Route("/feed")]
        public IActionResult Feed() => View(_posts.Paged(1));
    }
}
