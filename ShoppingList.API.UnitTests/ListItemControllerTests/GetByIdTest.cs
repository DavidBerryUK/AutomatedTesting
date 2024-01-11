using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using ShoppingList.API.Controllers;
using ShoppingList.Models;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.API.UnitTests.ListItemControllerTests
{
    public class ListItemControllerGetAllUnitTest
    {
        /// <summary>
        /// Verify that the get all method returns the correct response, status code and content
        ///
        /// This mocks the list service GetAll method to return a single item
        /// but does not test the list service itself
        /// 
        /// </summary>
        [Fact]
        public void GetByIdTest_ReturnsExpectedListItem()
        {
            //
            // Arrange
            //
            var id = Guid.NewGuid();
            var expectedResponse = new ShoppingItemEntity("Apples", 1);
            var mockListService = new Mock<IShoppingListService>();
            mockListService.Setup(x => x.GetItemById(It.Is<Guid>(actualId => actualId == id))).Returns(expectedResponse);
            var mockLogger = new Mock<ILogger<ListItemController>>();
            var controller = new ListItemController(mockListService.Object, mockLogger.Object);

            //
            // Act
            //
            var actionResult = controller.GetById(id);

            //
            // Assert
            //
            actionResult.Should().NotBeNull();
            
            // check response is Ok and Status 200
            var result = actionResult.Result.Should().BeOfType<OkObjectResult>().Subject;
            result.StatusCode.Should().Be(200);

            // Check response content is correct (expected list)
            result.Value.Should().BeEquivalentTo(expectedResponse);

            // verify the list service was called once to obtain the shopping list
            mockListService.Verify(x => x.GetItemById(It.Is<Guid>(actualId => actualId == id)), Times.Once);
        }

        /// <summary>
        /// Verify that the get all method returns the correct response, status code and content
        ///
        /// In this instance the mocked list service returns null (not found), so the response should be NotFound
        /// but does not test the list service itself
        /// 
        /// </summary>
        [Fact]
        public void GetByIdTest_ReturnsItemNotFound()
        {
            //
            // Arrange
            //
            var id = Guid.NewGuid();
            var mockListService = new Mock<IShoppingListService>();
            mockListService.Setup(x => x.GetItemById(It.Is<Guid>(actualId => actualId == id))).Returns((ShoppingItemEntity?)null);
            var mockLogger = new Mock<ILogger<ListItemController>>();
            var controller = new ListItemController(mockListService.Object, mockLogger.Object);

            //
            // Act
            //
            var actionResult = controller.GetById(id);

            //
            // Assert
            //
            actionResult.Should().NotBeNull();

            // check response is NotFound and Status 404
            var result = actionResult.Result.Should().BeOfType<NotFoundResult>().Subject;
            result.StatusCode.Should().Be(404);

            // verify the list service was called once to obtain the shopping list
            mockListService.Verify(x => x.GetItemById(It.Is<Guid>(actualId => actualId == id)), Times.Once);
        }
    }
}