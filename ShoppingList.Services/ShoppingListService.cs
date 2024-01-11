using ShoppingList.Models;
using ShoppingList.Repository.Interfaces;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.Services
{
    public class ShoppingListService : IShoppingListService
    {
        private readonly IShoppingListRepository _listRepository;

        public ShoppingListService(IShoppingListRepository listRepository)
        {
            _listRepository = listRepository;
        }

        public List<ShoppingItemEntity> GetAll()
        {
            return _listRepository.GetAll();
        }

        public ShoppingItemEntity? GetItemById(Guid id) 
        {
            return _listRepository.GetById(id);
        }

        public ShoppingItemEntity AddOrUpdateItem(ShoppingItemEntity item)
        {
            return _listRepository.AddOrUpdateItem(item);
        }

        public void DeleteItem(Guid id)
        {
            _listRepository.DeleteItem(id);
        }

        public void DeleteAll()
        {
            _listRepository.DeleteAll();
        }

        public void DeleteCompleted()
        {
            _listRepository.DeleteCompleted();
        }
    }
}
