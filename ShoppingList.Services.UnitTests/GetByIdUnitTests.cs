using FluentAssertions;
using Moq;
using ShoppingList.Models;
using ShoppingList.Repository.Interfaces;

namespace ShoppingList.Services.UnitTests
{
    public class GetByIdUnitTests
    {
        /// <summary>
        /// Verify the ListServices uses the ListRepository GetById method to return data
        /// and the correct parameter is passed.
        /// </summary>
        [Fact]
        public void GetById_ExpectCallGetById()
        {
            // Arrange
            var id = Guid.NewGuid();
            var expectedResponse = new ShoppingItemEntity("Apples", 1);
            var mockRepository = new Mock<IShoppingListRepository>();
            mockRepository.Setup(x => x.GetById(It.Is<Guid>(actualId => actualId == id))).Returns(expectedResponse);

            // Act
            var response = new ShoppingListService(mockRepository.Object).GetItemById(id);

            // Assert
            mockRepository.Verify(x => x.GetById(It.Is<Guid>(actualId => actualId == id)), Times.Once);
            response.Should().BeEquivalentTo(expectedResponse);
        }
    }
}