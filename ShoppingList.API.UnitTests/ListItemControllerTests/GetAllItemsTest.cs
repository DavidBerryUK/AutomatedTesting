using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using ShoppingList.API.Controllers;
using ShoppingList.Models;
using ShoppingList.Services.Interfaces;

namespace ShoppingList.API.UnitTests.ListItemControllerTests
{
    public class ListGetAllTest
    {
        /// <summary>
        /// Verify that the get all method returns the correct response, status code and content
        ///
        /// This mocks the list service GetAll method to return a list of 3 items
        /// but does not test the list service itself
        /// 
        /// </summary>
        [Fact]
        public void GetAll_ReturnsExpectedList()
        {
            //
            // Arrange
            //
            var expectedResponse = new List<ShoppingItemEntity>
            {
                new("Apples", 1),
                new("Carrots", 2),
                new("Milk", 3)
            };
            var mockListService = new Mock<IShoppingListService>();
            mockListService.Setup(x => x.GetAll()).Returns(expectedResponse);
            var mockLogger = new Mock<ILogger<ListItemController>>();
            var controller = new ListItemController(mockListService.Object, mockLogger.Object);

            //
            // Act
            //
            var actionResult = controller.GetAll();

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
            mockListService.Verify(x => x.GetAll(), Times.Once);
        }
    }
}