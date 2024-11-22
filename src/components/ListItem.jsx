export default function ListItem({ itemObj, deleteItem, updateItem }) {
  function handleDeleteButton(e) {
    const listItem = e.target.closest("#list-group-item");
    listItem.classList.add(
      "animate__animated",
      "animate__zoomOut",
      "animate__duration-1.3s"
    );
    setTimeout(() => {
      listItem.classList.remove(
        "animate__animated",
        "animate__zoomOut",
        "animate__duration-1.3s"
      );
      deleteItem(itemObj.id);
    }, 1000);
  }

  function handleCheckboxChange() {
    updateItem(itemObj.id);
  }

  return (
    <div
      className={`list-group-item my-2 border-0 d-flex justify-content-between align-items-center shadow-md ${
        itemObj.completed ? "bg-dark" : ""
      }`}
      id="list-group-item"
      style={{ backgroundColor: "#3c3c3c" }}
    >
      <div>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          className="me-2"
        />
        <span
          className={`fs-6 fw-light ${
            itemObj.completed ? "text-success" : "text-white"
          }`}
        >
          {itemObj.title} - {itemObj.quantity}
        </span>
      </div>
      <button
        className="fw-light btn text-danger fs-5"
        onClick={handleDeleteButton}
      >
        X
      </button>
    </div>
  );
}
