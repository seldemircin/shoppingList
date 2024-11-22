import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function ShoppingList() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function updateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container w-50 mt-3">
      <div className="card" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="card-title">
          <h3 className="text-center text-primary mt-3">Shopping List</h3>
        </div>
        <div className="card-body">
          <Form addItem={addItem} items={items} />
          <List items={items} deleteItem={deleteItem} updateItem={updateItem} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
