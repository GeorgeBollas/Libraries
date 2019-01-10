using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Noter.Application.Notes.Commands.CreateNote;
using Noter.Application.Notes.Commands.DeleteNote;
using Noter.Application.Notes.Commands.UpdateNote;
using Noter.Application.Notes.Queries.GetNoteList;

namespace Noter.Web.Api.Controllers
{
    public class NotesController : BaseController
    {
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<NoteListViewModel>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> SearchNotes([FromQuery] GetNoteListQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        // POST api/notes
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CreateNoteCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        // PUT api/notes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody]UpdateNoteCommand command)
        {
            if (command == null || command.Id != id)
            {
                return BadRequest();
            }

            return Ok(await Mediator.Send(command));
        }

        // DELETE api/notes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteNoteCommand { Id = id });

            return NoContent();
        }
    }
}
