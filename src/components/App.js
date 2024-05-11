import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const [isDarkMode,setAppClass] = useState("false")
  const appClass = isDarkMode ? "App light" : "App dark"

  function handleClick() {
    setAppClass((isDarkMode) => !isDarkMode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
