using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Noter.Application.Libraries.Queries.GetTagTypeList;

namespace Noter.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController :  BaseController
    {
        // GET api/libraries
        [HttpGet("pinnedFirst/{pinnedFirst}")]
        public async Task<ActionResult<TagTypeListViewModel>> GetAll(bool pinnedTagsFirst = true)
        {
            try
            {
                var request = new GetTagTypeListQuery
                {
                    NamePart = "",
                    PinnedTagsFirst = pinnedTagsFirst,
                    IncludeInactive = false,
                };

                return Ok(await Mediator.Send(request));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
