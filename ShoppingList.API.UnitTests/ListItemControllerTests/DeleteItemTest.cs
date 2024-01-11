using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using ShoppingList.API.Controllers;
using ShoppingList.Models;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.API.UnitTests.ListItemControllerTests
{
    public class ListRemoveItemTest
    {
        /// <summary>
        /// Verify that the controller calls the list service to remove an item with the correct id
        /// that has been passed into the controller
        /// </summary>
        [Fact]
        public void Remove_ReturnsNothing()
        {
            //
            // Arrange
            //
            var item = new ShoppingItemEntity("Apples", 1);
            

            var mockListService = new Mock<IShoppingListService>();
            mockListService.Setup(x => x.DeleteItem(It.Is<Guid>(actualItem => actualItem == item.Id)));
            var mockLogger = new Mock<ILogger<ListItemController>>();
            var controller = new ListItemController(mockListService.Object, mockLogger.Object);

            //
            // Act
            //
            var actionResult = controller.Delete(item.Id);

            //
            // Assert
            //
            actionResult.Should().NotBeNull();
            
            // check response is Ok and Status 200
            var result = actionResult.Should().BeOfType<OkResult>().Subject;
            result.StatusCode.Should().Be(200);

            // verify the list service was called once to obtain the shopping list
            mockListService.Verify(x => x.DeleteItem(It.Is<Guid>(actualItem => actualItem == item.Id)), Times.Once);
        }
    }
}