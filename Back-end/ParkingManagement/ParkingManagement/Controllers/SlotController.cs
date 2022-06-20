using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkingManagement.Model;
using ParkingManagement.Model.DTO;
using ParkingManagement.Service;

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
        public async Task<ActionResult<IEnumerable<SlotDTO>>> GetAllSlot()
        {
            return Ok(await slotService.GetAll());
        } 
        
        [HttpGet("GetAll/{typeId}")]
        public async Task<ActionResult<IEnumerable<SlotDTO>>> GetAllSlotByType(int typeId)
        {
            return Ok(await slotService.GetAllByTypeId(typeId));
        }

        [HttpGet("Get/{Id}")]
        public async Task<ActionResult<SlotDTO>> GetType(string Id)
        {
            SlotDTO slot = await slotService.GetByID(Id);
            if (slot == null) return BadRequest("not found");
            return Ok(slot);
        }

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
