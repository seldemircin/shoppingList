import ListItem from "./ListItem";

export default function List({ items, deleteItem, updateItem }) {
  return (
    <div>
      <div className="list-group">
        {items.map((item) => (
          <ListItem
            itemObj={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
