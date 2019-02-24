using Microsoft.AspNetCore.Mvc;
using Noter.Application.Exceptions;
using Noter.Application.Libraries.Commands.CreateLibrary;
using Noter.Application.Libraries.Commands.DeleteLibrary;
using Noter.Application.Libraries.Commands.UpdateLibrary;
using Noter.Application.Libraries.Queries;
using Noter.Application.Libraries.Queries.GetLibraryDetails;
using Noter.Application.Libraries.Queries.GetLibraryList;
using System;
using System.Threading.Tasks;

namespace Noter.Api.Controllers
{
    [Route("api/[controller]")]
    public class LibrariesController : BaseController
    {
        // GET api/libraries
        [HttpGet]
        public async Task<ActionResult<LibraryListViewModel>> GetAll()
        {
            try
            {
                return Ok(await Mediator.Send(new GetLibraryListQuery()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET api/libraries/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await Mediator.Send(new GetLibraryDetailsQuery { LibraryId = id }));
        }

        // POST api/libraries
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CreateLibraryCommand command)
        {
            try
            {
                return Ok(await Mediator.Send(command));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT api/libraries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody]UpdateLibraryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        // DELETE api/libraries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteLibraryCommand { LibraryId = id });

            return NoContent();
        }
    }
}
