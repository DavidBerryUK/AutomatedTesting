using ShoppingList.Models;

namespace ShoppingList.Services.Interfaces
{
    public interface IShoppingListService
    {
        List<ShoppingItemEntity> GetAll();
        ShoppingItemEntity? GetItemById(Guid id);
        ShoppingItemEntity AddOrUpdateItem(ShoppingItemEntity item);
        void DeleteItem(Guid id);

        void DeleteAll();
        void DeleteCompleted();
    }
}
