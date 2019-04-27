using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Noter.Api.SignalR;
using Noter.Application.Exceptions;
using Noter.Application.Libraries.Commands.CreateLibrary;
using Noter.Application.Libraries.Commands.DeleteLibrary;
using Noter.Application.Libraries.Queries.GetLibraryDetails;
using Noter.Application.Libraries.Queries.GetLibraryList;
using System;
using System.Threading.Tasks;

namespace Noter.Api.Controllers
{
    [Route("api/[controller]")]
    public class LibrariesController : BaseController
    {
        public IHubContext<LibrariesHub, ILibrariesClient> _hubContext { get; }

        public LibrariesController(IHubContext<LibrariesHub, ILibrariesClient> hubContext)
        {
            _hubContext = hubContext;
        }

        // GET api/libraries
        [HttpGet("pinnedFirst/{pinnedFirst}")]
        public async Task<ActionResult<LibraryListViewModel>> GetAll(bool pinnedFirst = true)
        {
            try
            {
                await _hubContext.Clients.All.ReceiveMessage("George", "Get libraries was called");

                var request = new GetLibraryListQuery
                {
                    NamePart ="",
                    PinnedFirst = pinnedFirst,
                    IncludeInactive = false,
                };

                return Ok(await Mediator.Send(request));
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

        //// PUT api/libraries/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Update([FromBody]UpdateLibraryCommand command)
        //{
        //    return Ok(await Mediator.Send(command));
        //}

        // DELETE api/libraries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteLibraryCommand { LibraryId = id });

            return NoContent();
        }
    }
}
