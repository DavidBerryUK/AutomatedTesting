using Moq;
using ShoppingList.Repository.Interfaces;
namespace ShoppingList.Services.UnitTests
{
    public class DeleteUnitTests
    {
        /// <summary>
        /// verify the ListServices uses the ListRepository Remove method to delete
        /// </summary>
        [Fact]
        public void Delete_ExpectCallsDelete()
        {
            // Arrange
            //
            var id = Guid.NewGuid();
            var mockRepository = new Mock<IShoppingListRepository>();
            mockRepository.Setup(x => x.DeleteItem(It.Is<Guid>(actualId => actualId == id)));

            // Act
            //
            new ShoppingListService(mockRepository.Object).DeleteItem(id);

            // Assert
            //
            mockRepository.Verify(x => x.DeleteItem(It.Is<Guid>(actualId => actualId == id)), Times.Once);
        }
    }
}