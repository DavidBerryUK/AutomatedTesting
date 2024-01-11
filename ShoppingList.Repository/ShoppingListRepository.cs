using ShoppingList.Models;
using ShoppingList.Repository.Interfaces;

namespace ShoppingList.Repository
{
    public class ShoppingListRepository : IShoppingListRepository
    {
        private List<ShoppingItemEntity> Items { get; set; } = new List<ShoppingItemEntity>();

        // add or update item in collection
        //
        public ShoppingItemEntity AddOrUpdateItem(ShoppingItemEntity item)
        {
            // Replace existing item with same Id, or add new item if no matching Id found
            //
            var existing = Items.FirstOrDefault(i => i.Id == item.Id);
            if (existing != null)
            {
                Items.Remove(existing);
            }

            // If item with same name exists, add quantity to existing item
            //
            var matching = Items.FirstOrDefault(i => i.Name == item.Name);
            if (matching != null)
            {
                matching.Quantity += item.Quantity;
                return matching;
            }

            // Add new item by copying input item
            //
            var clone = item.Clone();
            Items.Add(clone);

            // Sort the items by Name
            Items = Items.OrderBy(i => i.Name).ToList();
            return clone;
        }

        // Remove item with matching Id
        //
        public void DeleteItem(Guid id)
        {
            var item = Items.FirstOrDefault(i => i.Id == id);
            if (item != null)
            {
                Items.Remove(item);
            }
        }

        public void DeleteAll()
        {
            Items.Clear();
        }

        public void DeleteCompleted()
        {
            Items = Items.Where(o => o.IsChecked == false).ToList();
        }

        public List<ShoppingItemEntity> GetAll()
        {
            return Items;
        }

        public ShoppingItemEntity? GetById(Guid id)
        {
            return Items.FirstOrDefault(i => i.Id == id);
        }
    }
}