import React from 'react';
import styles from './Cards.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Ingrese ciudad..."></input>
      <button onClick={()=>props.onSearch('Buscando...')}>Agregar</button>
    </div>
    )
  };