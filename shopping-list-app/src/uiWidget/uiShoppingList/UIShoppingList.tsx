import ShoppingItemModel from "../../models/ShoppingItemModel";
import UIShoppingItem from "../uiShoppingItem/UIShoppingItem";
import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import useViewController from "./hooks/UseViewController";

interface IProperties {
  collection: ShoppingItemCollection;
  onCollectionChanged?: (collection: ShoppingItemCollection) => void;
  onItemChanged?: (item: ShoppingItemModel) => void;
  onItemDeleted?: (item: ShoppingItemModel) => void;
  testId?: string;
}

const UIShoppingList: React.FC<IProperties> = (props) => {
  /********************************************/
  /* View Controller                          */
  /********************************************/
  const { handleShoppingItemChangedEvent, handleShoppingItemDeletedEvent } = useViewController(
    props.collection,
    props.onCollectionChanged,
    props.onItemChanged,
    props.onItemDeleted
  );

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
