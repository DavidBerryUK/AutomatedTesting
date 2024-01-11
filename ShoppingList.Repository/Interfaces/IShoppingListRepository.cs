using ShoppingList.Models;

namespace ShoppingList.Repository.Interfaces;

public interface IShoppingListRepository
{
    ShoppingItemEntity AddOrUpdateItem(ShoppingItemEntity item);
    void DeleteItem(Guid id);
    void DeleteAll();
    void DeleteCompleted();

    List<ShoppingItemEntity> GetAll();
    ShoppingItemEntity? GetById(Guid id);
}