using FluentAssertions;
using Moq;
using ShoppingList.Models;
using ShoppingList.Repository.Interfaces;

namespace ShoppingList.Services.UnitTests
{
    public class AddUnitTests
    {
        /// <summary>
        /// Verify the ListServices uses the ListRepository AddOrUpdate method to return
        /// and that the correct item is returned.
        /// </summary>
        [Fact]
        public void Add_ExpectCallsAddOrUpdate()
        {
            // Arrange
            //
            var addItem = new ShoppingItemEntity("Apples", 1);
            var mockRepository = new Mock<IShoppingListRepository>();
            mockRepository.Setup(x => x.AddOrUpdateItem(It.Is<ShoppingItemEntity>(o => o.Equals(addItem)))).Returns(addItem);

            // Act
            //
            var response = new ShoppingListService(mockRepository.Object).AddOrUpdateItem(addItem);

            // Assert
            //
            mockRepository.Verify(x => x.AddOrUpdateItem(It.IsAny<ShoppingItemEntity>()), Times.Once);
            response.Should().BeEquivalentTo(addItem);
        }
    }
}