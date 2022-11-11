import { useEffect, useState } from 'react'
import { getPlaceholder } from "./api/getPlaceholder"
import GraficoCircular from "./components/GraficoCircular"
import "./App.css";

function App() {

  const [id, setId] = useState(1)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([1])
  const [disponible, setDisponible] = useState(10)

  const dataPlaceholder = async(id) => {
    const data = await getPlaceholder(id);
    console.log(data)
    setUser({ ...data})
  }

  const siguiente =() => {
    id == 10 ? setId(10) : setId(id + 1)
  }
  const anterior = () => {
    id === 1 ? setId(1) : setId(id -1) 
  }

  const agregar = () =>{
    if(!users.includes(user) && users.length < 5){
      setUsers([user, ...users])
       if(disponible > 0  ){
        setDisponible(disponible-1)
      }
    } 
    else{
      console.log('Error');
  }};

  useEffect(() => {
    dataPlaceholder(id);
  }, [id])

  return (
    <div className="app">
      <h1 className="app-title">Reto<span>01</span></h1>
      <div className="container">
        <GraficoCircular disponible={disponible} usurs={users.lenght} />
        <div className="container-content">
          <div className="data-usur">
            <h2>Usuario {user.id}</h2>
            <p>Nombre {user.name}</p>
            <p>Email {user.email}</p>
            <p>Ciudad {user.city}</p>
            <div className="botones">
              <button
                data-swal-toast-template
                className="btn btn-add"
                onClick={agregar}
              >Agregar</button>
              <button 
                className="btn"
                onClick={anterior}
              >Anterior</button>
              <button 
                className="btn"
                onClick={siguiente}
              >Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App