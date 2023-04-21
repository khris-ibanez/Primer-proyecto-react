import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dig, setDig] = useState([]);

  // useEffect(()=>{
  //   async function getdig(){
  //     const res=await fetch('https://digimon-api.vercel.app/api/digimon')
  //     const json=await res.json()
  //     setDig(json)
  //   }
  //   getdig()
  // },[])

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .catch(error => console.error(error))
      .then((data) => setDig(data));
      alert("este proyecto fue realizado con REACT JS :D")
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Imagen</th>
          <th>LVL</th>
        </tr>
      </thead>
      <tbody>
        {dig.map((digi, indix) => (
          <tr key={indix}>
            <td>{digi.name}</td>
            <td>
              <img src={digi.img} alt="imagen Digimon buscada"></img>
            </td>
            <td>{digi.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
