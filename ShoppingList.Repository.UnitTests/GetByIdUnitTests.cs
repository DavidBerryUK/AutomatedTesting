using FluentAssertions;
using ShoppingList.Models;

namespace ShoppingList.Repository.UnitTests
{
    public class GetByIdUnitTests
    {
        [Fact]
        public void GetItemFromCollection_ExpectedReturnItem()
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
            var item = collection.GetById(itemEggs.Id);

            //
            // Assert
            //
            item.Should().NotBeNull();
            item.Should().Be(itemEggs);
        }

        [Fact]
        public void GetNoneExistentItemFromCollection_ExpectedReturnNull()
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
            var item = collection.GetById(Guid.NewGuid());

            //
            // Assert
            //
            item.Should().BeNull();
        }
    }
}
