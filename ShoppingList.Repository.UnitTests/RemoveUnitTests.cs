using FluentAssertions;
using ShoppingList.Models;

namespace ShoppingList.Repository.UnitTests
{
    public class RemoveUnitTests
    {
        [Fact]
        public void RemoveItemFromCollection_ExpectedItemToBeRemoved()
        {
            //
            // Arrange
            //
            var collection = new ShoppingListRepository();
            var itemMilk = new ShoppingItemEntity("Milk", 1);
            var itemApples = new ShoppingItemEntity("Apples", 4);
            var itemEggs = new ShoppingItemEntity("Eggs", 6);
            collection.AddOrUpdateItem(itemMilk);
            collection.AddOrUpdateItem(itemApples);
            collection.AddOrUpdateItem(itemEggs);

            //
            // Act
            //
            collection.DeleteItem(itemApples.Id);

            //
            // Assert
            //
            var items = collection.GetAll();
            items.Count.Should().Be(2);
            items[0].Should().Be(itemEggs);
            items[1].Should().Be(itemMilk);
        }
    }
}
