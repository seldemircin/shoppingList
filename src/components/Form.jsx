import "../styles/Form.css";

import { useState } from "react";

export default function Form({ addItem }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleInputChange(e) {
    setProductName(e.target.value);
  }

  function handleSelectChange(e) {
    setQuantity(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (productName.trim() === "") {
      return;
    }

    const product = {
      id: Date.now(),
      title: productName,
      quantity: quantity,
      completed: false,
    };

    addItem(product);

    setProductName("");
    setQuantity(1);
  }

  return (
    <header className="mb-3">
      <form className="d-flex" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control me-2 border-0"
          placeholder="Enter the product name."
          style={{ backgroundColor: "#3c3c3c" }}
          value={productName}
          onChange={handleInputChange}
        />
        <select
          className="form-select w-auto me-2  border-0"
          value={quantity}
          onChange={handleSelectChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="1kg">1kg</option>
          <option value="2kg">2kg</option>
          <option value="3kg">3kg</option>
          <option value="4kg">4kg</option>
          <option value="5kg">5kg</option>
        </select>
        <button type="submit" className="btn btn-success bg-gradient">
          Add
        </button>
      </form>
    </header>
  );
}
