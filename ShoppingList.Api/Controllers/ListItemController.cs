using Microsoft.AspNetCore.Mvc;
using ShoppingList.Models;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListItemController(IShoppingListService listService, ILogger<ListItemController> logger) : Controller
    {
        private readonly ILogger<ListItemController> _logger = logger;

        [HttpGet(Name="Get All Items")]
        public ActionResult<List<ShoppingItemEntity>> GetAll()
        {
            return Ok(listService.GetAll());
        }

        [HttpGet("{id}",Name = "Get item by id")]
        public ActionResult<ShoppingItemEntity?> GetById(Guid id)
        {
            var item = listService.GetItemById(id);
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpPost(Name = "Add or Update Item")]
        public ActionResult<ShoppingItemEntity?> Add(ShoppingItemEntity item)
        {
            return Ok(listService.AddOrUpdateItem(item));
        }

        [HttpPut(Name = "Update Item")]
        public ActionResult<ShoppingItemEntity?> Update(ShoppingItemEntity item)
        {
            return Ok(listService.AddOrUpdateItem(item));
        }

        [HttpDelete("all", Name = "Delete all Items")]
        public ActionResult DeleteAllItems()
        {
            listService.DeleteAll();
            return Ok();
        }

        [HttpDelete("completed", Name = "Delete all completed Items")]
        public ActionResult DeleteAllCompletedItems()
        {
            listService.DeleteCompleted();
            return Ok();
        }

        [HttpDelete("{id}", Name = "Delete List Item")]
        public ActionResult Delete(Guid id)
        {
            listService.DeleteItem(id);
            return Ok();
        }
    }
}
