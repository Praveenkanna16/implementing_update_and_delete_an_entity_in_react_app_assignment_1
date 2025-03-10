import React, { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch the item from the server
    fetch(API_URI)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  return <UpdateItem item={item} />;
}

export default App;
