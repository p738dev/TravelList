import React from "react";
import { IoIosClose } from "react-icons/io";

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        type="button"
        onClick={() => onDeleteItem(item.id)}
      >
        <IoIosClose
          color="red"
          size={45}
        />
      </button>
    </li>
  );
};

export default Item;
