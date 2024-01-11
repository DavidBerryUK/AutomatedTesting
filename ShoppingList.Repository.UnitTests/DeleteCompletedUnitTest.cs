using FluentAssertions;
using ShoppingList.Models;

namespace ShoppingList.Repository.UnitTests
{
    public class DeleteCompletedUnitTest
    {
        [Fact]
        public void RemoveCompletedItemsFromCollection_ExpectedItemToBeRemoved()
        {
            //
            // Arrange
            //
            var collection = new ShoppingListRepository();
            var itemMilk = new ShoppingItemEntity("Milk", 1);
            var itemCarrots = new ShoppingItemEntity("Carrots", 12);
            var itemApples = new ShoppingItemEntity("Apples", 4);
            var itemEggs = new ShoppingItemEntity("Eggs", 6);
            var itemBeans = new ShoppingItemEntity("Beans", 1);

            itemMilk.IsChecked = true;
            itemBeans.IsChecked = true;

            collection.AddOrUpdateItem(itemApples);
            collection.AddOrUpdateItem(itemBeans); // marked as completed
            collection.AddOrUpdateItem(itemCarrots);
            collection.AddOrUpdateItem(itemEggs);
            collection.AddOrUpdateItem(itemMilk); // marked as completed

            //
            // Act
            //
            collection.DeleteCompleted();

            //
            // Assert
            //
            var items = collection.GetAll();
            items.Count.Should().Be(3);
            items[0].Should().Be(itemApples);
            items[1].Should().Be(itemCarrots);
            items[2].Should().Be(itemEggs);
        }
    }
}
