using Microsoft.AspNetCore.Mvc;

namespace Portalen.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PodcastController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetPodcastsAsync()
        {
            return Ok("Success");
        }
    }
}
