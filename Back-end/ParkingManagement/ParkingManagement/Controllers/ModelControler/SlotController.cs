using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Filter;
using ParkingManagement.Model;
using ParkingManagement.Model.DTO;
using ParkingManagement.Model.ViewModel;
using ParkingManagement.Service;
using System.Collections.Generic;

namespace ParkingManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlotController : ControllerBase
    {
        private readonly ISlotService slotService;

        public SlotController(ISlotService slotService)
        {
            this.slotService = slotService;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllSlot()
        {
            IEnumerable<SlotDTO> slots = await slotService.GetAll();

            List<SlotDTO> A = slots.Where(c => c.Area == "A").OrderBy(c => c.Position).ToList();
            List<SlotDTO> B = slots.Where(c => c.Area == "B").OrderBy(c => c.Position).ToList();
            List<SlotDTO> C = slots.Where(c => c.Area == "C").OrderBy(c => c.Position).ToList();
            List<SlotDTO> D = slots.Where(c => c.Area == "D").OrderBy(c => c.Position).ToList();
            List<SlotDTO> E = slots.Where(c => c.Area == "E").OrderBy(c => c.Position).ToList();

            List<LotRow> lotRows = new List<LotRow>();

            foreach (LotRow r in slotService.toView(A)) lotRows.Add(r);
            foreach (LotRow r in slotService.toView(B)) lotRows.Add(r);
            foreach (LotRow r in slotService.toView(C)) lotRows.Add(r);
            foreach (LotRow r in slotService.toView(D)) lotRows.Add(r);
            foreach (LotRow r in slotService.toView(E)) lotRows.Add(r);

            return Ok(lotRows);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpGet("GetAll/{typeId}")]
        public async Task<ActionResult<IEnumerable<SlotDTO>>> GetAllSlotByType(int typeId)
        {
            return Ok(await slotService.GetAllByTypeId(typeId));
        }

        //[AuthorizationFilter]
        //[Authorize(Roles = "User, Admin")]
        [HttpGet("Get/{Id}")]
        public async Task<ActionResult<SlotDTO>> GetType(string Id)
        {
            SlotDTO slot = await slotService.GetByID(Id);
            if (slot == null) return BadRequest("not found");
            return Ok(slot);
        }

        [AuthorizationFilter]
        [Authorize(Roles = "User, Admin")]
        [HttpPut("Update")]
        public async Task<ActionResult<IEnumerable<SlotDTO>>> UpdateSlot(SlotDTO slot)
        {
            Boolean updated = await slotService.UpdateSlot(slot);
            if (updated)
            {
                return Ok(await slotService.GetAll());
            }
            else
            {
                return BadRequest("update fail");
            }
            
        }
    }
}
