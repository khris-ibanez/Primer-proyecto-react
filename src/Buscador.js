import { useState } from "react";
import "./Buscador.css";

export function Buscador() {
  const [endpoint, setEndpoint] = useState("");
  const [digbuscado, setDigbuscado] = useState([]);
  const capturar = function () {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${endpoint}`)
      .then((res) => {
        if (res.ok) res.json().then((data) => setDigbuscado(data));
        else {
          alert("pokemon no existe");
        }
      })
      .catch((error) => {
        setEndpoint("");
        alert("tenemos problemas en estos momentos");
      });
  };
  const handlerChange = (e) => {
    setEndpoint(e.target.value);
  };

  return (
    <div>
      <input onChange={handlerChange}></input>
      <button onClick={capturar}>buscar</button>
      {digbuscado.map((digi, index) => (
        <div key={index}>
          <h1>{digi.name}</h1>
          <img src={digi.img}></img>
          <h3>{digi.level}</h3>
        </div>
      ))}
    </div>
  );
}
