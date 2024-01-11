import ShoppingItemModel from "../../models/ShoppingItemModel";
import UIShoppingItem from "../uiShoppingItem/UIShoppingItem";
import ShoppingItemCollection from "src/models/ShoppingItemCollection";

interface IProperties {
  collection: ShoppingItemCollection;
  onCollectionChanged?: (collection: ShoppingItemCollection) => void;
  onItemChanged?: (item: ShoppingItemModel) => void;
  onItemDeleted?: (item: ShoppingItemModel) => void;
  testId?: string;
}

const UIShoppingList: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Event Handlers                           */
  /********************************************/
  const handleShoppingItemChangedEvent = (item: ShoppingItemModel) => {
    //
    // raise a item changed event
    //
    if (props.onItemChanged) {
      props.onItemChanged(item);
    }
    //
    // raise a collection changed event
    //
    if (props.onCollectionChanged) {
      const collection = props.collection.clone();
      collection.updateItem(item);
      props.onCollectionChanged(collection);
    }
  };

  const handleShoppingItemDeletedEvent = (item: ShoppingItemModel) => {
    //
    // raise a item deleted
    //
    if (props.onItemDeleted) {
      props.onItemDeleted(item);
    }
  };

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div className="ui-shopping-list" data-testid={props.testId}>
      {props.collection.items.map((item) => (
        <UIShoppingItem
          key={item.id}
          value={item}
          showButtonDelete={true}
          showSwitchComplete={true}
          onValueChanged={handleShoppingItemChangedEvent}
          onDelete={handleShoppingItemDeletedEvent}
        />
      ))}
    </div>
  );
};

export default UIShoppingList;
