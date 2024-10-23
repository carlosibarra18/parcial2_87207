import  reactImagen  from "./assets/img/title.png"
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/ruteo";
import { Cabecera } from "./app/componentes/contenedor/Cabecera";

function App() {

  return (
    <>
      <div className='container-fluid'>
        <BrowserRouter>
        <Cabecera/>
        <h1>Free Mind (Rubrica dos)</h1>
        <img src= { reactImagen}/><br/>
        <Ruteo/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
