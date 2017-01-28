using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    public class FeedController : Controller
    {
        [Route("/feed")]
        public IActionResult Feed()
        {
            return Json("Here comes the RSS FEED some day.");
        }
    }
}
