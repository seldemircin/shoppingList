import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShoppingList from "./ShoppingList.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingList />
  </StrictMode>
);
