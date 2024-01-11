namespace ShoppingList.Models
{
    public class ShoppingItemEntity :  IEquatable<ShoppingItemEntity>
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public int Quantity { get; set; } 
        public bool IsChecked { get; set; }
        public DateTime DateCreated { get; init; }

        public ShoppingItemEntity()
        {
            Id = Guid.NewGuid();
            DateCreated = DateTime.UtcNow;
            Name = "";
        }

        public ShoppingItemEntity(string name, int quantity, bool isChecked = false) : this()
        {
            Name = name;
            Quantity = quantity;
            IsChecked = isChecked;
        }

        public ShoppingItemEntity Clone()
        {
            return (MemberwiseClone() as ShoppingItemEntity)!;
        }

        // IEquatable implementation
        public bool Equals(ShoppingItemEntity? other)
        {
            if (other == null)
            {
                return false;
            }
            return Name == other.Name && 
                   Id == other.Id && 
                   Quantity == other.Quantity && 
                   DateCreated == other.DateCreated &&
                   IsChecked == other.IsChecked;
        }

        public override bool Equals(object? obj)
        {
            if (obj == null)
            {
                return false;
            }
        
            if (obj is not ShoppingItemEntity itemObj)
            {
                return false;
            }
        
            return Equals(itemObj);
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }
}
