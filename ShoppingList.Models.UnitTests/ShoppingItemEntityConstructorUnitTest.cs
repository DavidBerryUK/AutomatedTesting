using FluentAssertions;

namespace ShoppingList.Models.UnitTests
{
    public class ShoppingItemEntityConstructorUnitTest
    {
        [Fact]
        public void Constructor_ExpectedToHaveId()
        {
            // Act
            //
            var item = new ShoppingItemEntity();

            // Assert
            //
            item.Id.Should().NotBe(Guid.Empty);
            item.Name.Should().BeEmpty();
            item.Quantity.Should().Be(0);
            item.IsChecked.Should().BeFalse();
        }

        [Fact]
        public void Constructor_WithParameters_ExpectedToHavePopulatedProperties()
        {
            // Arrange
            //
            var name = "Test";
            var quantity = 15;
            var isChecked = true;

            // Act
            //
            var item = new ShoppingItemEntity(name, quantity, isChecked);

            // Assert
            //
            item.Id.Should().NotBe(Guid.Empty);
            item.Name.Should().Be(name);
            item.Quantity.Should().Be(quantity);
            item.IsChecked.Should().Be(isChecked);
        }
    }
}