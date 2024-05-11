import React, { useState } from "react";

function Item({ name, category }) {
  const [tag,setTag] = useState(false)

function handleClick() {
  setTag((tag) => !tag)
}



  return (
    <li className={tag ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{tag ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
