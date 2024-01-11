using Moq;
using ShoppingList.Repository.Interfaces;

namespace ShoppingList.Services.UnitTests
{
    public class DeleteCompletedUnitTests
    {
        [Fact]
        public void DeleteCompleted_ExpectCallsDeleteCompleted()
        {
            // Arrange
            //
            var mockRepository = new Mock<IShoppingListRepository>();
            mockRepository.Setup(x => x.DeleteCompleted());

            // Act
            //
            new ShoppingListService(mockRepository.Object).DeleteCompleted();

            // Assert
            //
            mockRepository.Verify(x => x.DeleteCompleted(), Times.Once);
        }
    }
}