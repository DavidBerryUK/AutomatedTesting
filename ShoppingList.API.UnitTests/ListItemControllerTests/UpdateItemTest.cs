using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using ShoppingList.API.Controllers;
using ShoppingList.Models;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.API.UnitTests.ListItemControllerTests
{
    public class ListUpdateTest
    {
        /// <summary>
        /// Verify that the add method returns the correct response, status code and content
        /// </summary>
        [Fact]
        public void Add_ReturnsItemUpdated()
        {
            //
            // Arrange
            //
            var newItem = new ShoppingItemEntity("Apples", 1);
            var addedItem = new ShoppingItemEntity("Apples", 1);

            var mockListService = new Mock<IShoppingListService>();
            mockListService.Setup(x => x.AddOrUpdateItem(It.Is<ShoppingItemEntity>(actualItem => actualItem == newItem))).Returns(addedItem);
            var mockLogger = new Mock<ILogger<ListItemController>>();
            var controller = new ListItemController(mockListService.Object, mockLogger.Object);

            //
            // Act
            //
            var actionResult = controller.Update(newItem);

            //
            // Assert
            //
            actionResult.Should().NotBeNull();
            
            // check response is Ok and Status 200
            var result = actionResult.Result.Should().BeOfType<OkObjectResult>().Subject;
            result.StatusCode.Should().Be(200);

            // Check response content is correct (expected list)
            result.Value.Should().BeEquivalentTo(addedItem);

            // verify the list service was called once to obtain the shopping list
            mockListService.Verify(x => x.AddOrUpdateItem(It.Is<ShoppingItemEntity>(actualItem => actualItem == newItem)), Times.Once);
        }
    }
}