using FluentAssertions;

namespace ShoppingList.Models.UnitTests
{
    public class ShoppingItemEntityEqualityUnitTest
    {
        [Fact]
        public void EqualObjects_ExpectedToBeEqual()
        {
            var dateCreated = DateTime.UtcNow;

            // Arrange
            //
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeTrue();
        }

        [Fact]
        public void DifferentGuid_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guidA = Guid.NewGuid();
            var guidB = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guidA,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guidB,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void DifferentName_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Eggs",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void DifferentQuantity_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 1,
                DateCreated = dateCreated,
                IsChecked = true
            };

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void DifferentIsChecked_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = false
            };

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void DifferentDateCreated_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreatedA = DateTime.UtcNow;
            var dateCreatedB = DateTime.UtcNow.AddHours(1);
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreatedA,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreatedB,
                IsChecked = true
            };

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void NullPassedIn_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = null as ShoppingItemEntity;

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void AsObjectEqualObjects_ExpectedToBeEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            } as object;

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeTrue();
        }


        [Fact]
        public void AsNullObjectType_ExpectedToBeNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = null as object;

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }


        [Fact]
        public void AsObjectWrongObjectType_ExpectedToBeNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity()
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            };

            var itemB = new 
            {
                Id = guid,
                Category = "Dairy",
                
            } as object;

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

        [Fact]
        public void AsObjectNullPassedIn_ExpectedNotEqual()
        {
            // Arrange
            //
            var dateCreated = DateTime.UtcNow;
            var guid = Guid.NewGuid();
            var itemA = new ShoppingItemEntity
            {
                Id = guid,
                Name = "Milk",
                Quantity = 5,
                DateCreated = dateCreated,
                IsChecked = true
            } as object;

            var itemB = null as object;

            // Act
            //
            var isEqual = itemA.Equals(itemB);

            // Assert
            //
            isEqual.Should().BeFalse();
        }

    }
}