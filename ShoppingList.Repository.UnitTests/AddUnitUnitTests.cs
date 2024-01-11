using FluentAssertions;
using ShoppingList.Models;

namespace ShoppingList.Repository.UnitTests
{
    public class AddUnitUnitTests
    {
        /// <summary>
        /// basic test to add a single item to the collection and ensure that it is added
        /// </summary>
        [Fact]
        public void AddSingleItemToEmptyCollection_ExpectedNewItem()
        {
            // Arrange
            //
            var collection = new ShoppingListRepository();
            var itemMilk = new ShoppingItemEntity("Milk", 1);

            // Act
            //
            collection.AddOrUpdateItem(itemMilk);

            // Assert
            //
            var items = collection.GetAll();
            items.Count.Should().Be(1);
            items.First().Should().Be(itemMilk);
        }

        /// <summary>
        /// basic test to add 3 items to the collection and ensure that they are sorted
        /// </summary>
        [Fact]
        public void AddMultipleItemsToEmptyCollection_ExpectedNewItemsToBeSorted()
        {
            // Arrange
            //
            var collection = new ShoppingListRepository();
            var itemMilk = new ShoppingItemEntity("Milk", 1);
            var itemApples = new ShoppingItemEntity("Apples", 4);
            var itemEggs = new ShoppingItemEntity("Eggs", 6);

            // Act
            //
            collection.AddOrUpdateItem(itemMilk);
            collection.AddOrUpdateItem(itemApples);
            collection.AddOrUpdateItem(itemEggs);

            // Assert
            //
            var items = collection.GetAll();
            items.Count.Should().Be(3);
            items[0].Should().Be(itemApples);
            items[1].Should().Be(itemEggs);
            items[2].Should().Be(itemMilk);
        }

        /// <summary>
        /// Add the same item multiple times to the collection and
        /// ensure that only one item is added to the collection
        /// </summary>
        [Fact]
        public void AddSameItemsMultipleTimesCollection_ExpectedNonDuplicatedCollection()
        {
            // Arrange
            //
            var collection = new ShoppingListRepository();
            var itemMilk = new ShoppingItemEntity("Milk", 1);
            var itemApples = new ShoppingItemEntity("Apples", 4);
            var itemEggs = new ShoppingItemEntity("Eggs", 6);

            // Act
            //
            collection.AddOrUpdateItem(itemMilk);
            collection.AddOrUpdateItem(itemMilk);
            collection.AddOrUpdateItem(itemMilk);
            collection.AddOrUpdateItem(itemMilk);
            collection.AddOrUpdateItem(itemApples);
            collection.AddOrUpdateItem(itemApples);
            collection.AddOrUpdateItem(itemApples);
            collection.AddOrUpdateItem(itemEggs);
            collection.AddOrUpdateItem(itemEggs);
            collection.AddOrUpdateItem(itemEggs);

            // Assert
            //
            var items = collection.GetAll();

            items.Count.Should().Be(3);
            items[0].Should().Be(itemApples);
            items[0].Quantity.Should().Be(4);

            items[1].Should().Be(itemEggs);
            items[1].Quantity.Should().Be(6);

            items[2].Should().Be(itemMilk);
            items[2].Quantity.Should().Be(1);
        }

        //
        // test that new items with the same name as existing items are added to the existing items
        // They are merged together, regardless if they have different id values
        [Fact]
        public void AddSameIdenticalNamedItems_ExpectedUpdatedTally()
        {
            // Arrange
            //
            var collection = new ShoppingListRepository();
            var itemApples1 = new ShoppingItemEntity("Apples", 4);
            var itemApples2 = new ShoppingItemEntity("Apples", 2);

            // Act
            //
            collection.AddOrUpdateItem(itemApples1);
            collection.AddOrUpdateItem(itemApples2);

            // Assert
            //
            var items = collection.GetAll();

            items.Count.Should().Be(1);
            items[0].Name.Should().Be("Apples");
            items[0].Quantity.Should().Be(6);
        }
    }
}
