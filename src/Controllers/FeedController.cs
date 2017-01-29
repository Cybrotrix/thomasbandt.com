using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class FeedController : Controller
    {
        [Route("/feed")]
        public IActionResult Feed() => Json("Here comes the RSS FEED some day.");
    }
}
