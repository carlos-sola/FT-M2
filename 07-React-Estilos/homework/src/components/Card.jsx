import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <button onClick={props.onClose}>  X  </button>
    <h4>{props.name}</h4>
     <p>Temp.Máx.</p><p>{props.max}</p>
     <p>Temp.Mín</p><p>{props.min}</p>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="image not found"></img>
    </div>
};