import "../styles/styles.scss";
import UIShoppingListApp from "src/uiWidget/uiShoppingListApp/UIShoppingListApp";

function App() {
  // const [toDoItem, setToDoItem] = useState(new ShoppingItemModel());

  // const handleOnRowUpdatedEvent = (newValue: ShoppingItemModel) => {
  //   setToDoItem(newValue);
  // };

  return (
    <>
      <h1>Shopping List</h1>
      <UIShoppingListApp />
    </>
  );
}

export default App;
