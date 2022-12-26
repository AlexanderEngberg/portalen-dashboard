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
            var podcasts = new List<Podcast>
            {
                new Podcast
                {
                    Id = 1,
                    Program = "P1 Dokumentär",
                    Info = "Pionjärdykarna i Nordsjön",
                    IconUrl = "https://static-cdn.sr.se/images/909/951d2df5-ddc0-4634-ba9c-8bc9116297af.jpg?preset=api-default-square",
                    FileUrl = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3"
                }
            };

            return new JsonResult(podcasts);
        }
    }

    public class Podcast
    {
        public int Id { get; set; }
        public string Program { get; set; }
        public string Info { get; set; }
        public string IconUrl { get; set; }
        public string FileUrl { get; set; }
    }
}
