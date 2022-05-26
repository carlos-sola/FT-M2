import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  function handleChange(e){
    setCity(city => city = e.target.value)
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text" onChange={handleChange} placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
