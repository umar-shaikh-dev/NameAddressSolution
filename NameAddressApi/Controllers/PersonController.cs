using Microsoft.AspNetCore.Mvc;
using NameAddressApi.Models;
using NameAddressApi.Services;

namespace NameAddressApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpPost]
        public ActionResult<Person> SavePerson([FromBody] Person person)
        {
            try
            {
                var result = _personService.SavePerson(person);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
