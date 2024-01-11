using FluentAssertions;

namespace ShoppingList.Repository.UnitTests
{
    public class ConstructorUnitTests
    {
        [Fact]
        public void Constructor_ExpectedToEmptyCollection()
        {
            // Act
            //
            var collection = new ShoppingListRepository();

            // Assert
            //
            collection.GetAll().Should().BeEmpty();
        }
    }
}
