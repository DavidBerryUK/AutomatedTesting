using Moq;
using ShoppingList.Repository.Interfaces;

namespace ShoppingList.Services.UnitTests
{
    public class DeleteAllUnitTests
    {
        [Fact]
        public void DeleteAll_ExpectCallsDeleteAll()
        {
            // Arrange
            //
            var mockRepository = new Mock<IShoppingListRepository>();
            mockRepository.Setup(x => x.DeleteAll());

            // Act
            //
            new ShoppingListService(mockRepository.Object).DeleteAll();

            // Assert
            //
            mockRepository.Verify(x => x.DeleteAll(), Times.Once);
        }
    }
}