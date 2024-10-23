import { Route, Routes } from "react-router-dom";
import { FreeCrear } from "../../componentes/freeMind/FreeCrear";
import { FreeListar } from "../../componentes/freeMind/FreeListar";
import { FreeAdmin } from "../../componentes/freeMind/FreeAdmin";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { FreeActualizar } from "../../componentes/freeMind/FreeActualizar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { AcercaDe } from "../../componentes/otros/AcercaDe";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route  path="/" element={< Inicio/>}/>
            <Route path="/freecre" element={< FreeCrear/>}/>
            <Route path="/freelis" element={< FreeListar/>}/>
            <Route path="/freeadm" element={< FreeAdmin/>}/>
            <Route path="/libact/:codigo" element={< FreeActualizar/>}/>
            <Route path="*" element={< NoEncontrado/>}/>
            <Route  path="/acerde" element={< AcercaDe/>}/>
            

        </Routes>

    )
}