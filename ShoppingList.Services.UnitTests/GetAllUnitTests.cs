using FluentAssertions;
using Moq;
using ShoppingList.Models;
using ShoppingList.Repository.Interfaces;

namespace ShoppingList.Services.UnitTests
{
    public class GetAllUnitTests
    {
        /// <summary>
        /// Verify the ListServices uses the ListRepository GetAll method to return
        /// the list of items.
        /// </summary>
        [Fact]
        public void GetAll_ExpectCallsGetAll()
        {
            // Arrange
            //
            var expectedResponse = new List<ShoppingItemEntity>
            {
                new("Apples", 1),
                new("Carrots", 2),
                new("Milk", 3)
            };
            var mockRepository = new Mock<IShoppingListRepository>();
            mockRepository.Setup(x => x.GetAll()).Returns(expectedResponse);
            var service = new ShoppingListService(mockRepository.Object);

            // Act
            //
            var response = service.GetAll();
        
            // Assert
            //
            mockRepository.Verify(x => x.GetAll(), Times.Once);
            response.Should().BeEquivalentTo(expectedResponse);
        }
    }
}