import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDesripiotn] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDesripiotn("");
    setQuantity(1);
  };

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      <h3>Co potrzebujesz na swoją wyprawę ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option
            value={num}
            key={num}
          >
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Co zabierasz ..."
        value={description}
        onChange={(e) => setDesripiotn(e.target.value)}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default Form;
