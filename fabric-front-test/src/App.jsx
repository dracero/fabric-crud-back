import React from "react";
import Listageneral from "./listageneral";
import Ingresar from "./Ingresar";
import Buscarid from "./Buscarid";
import Modificar from "./Modificar";
import Borrar from "./Borrar"; 
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Navbar from "./navbar";

const App = () => {
  const location = useLocation()

  return (
   <div> 
    <ul >
      {location.pathname != "/" ? <Link to="/" > Volver</Link> : null}
      {console.log(location.pathname)} 
    </ul>       
         <Routes>
            <Route path="/" element={<Navbar />} />
             <Route path="/Ingresar" element={  <Ingresar />} />
             <Route path="/Buscarid" element={  <Buscarid />} />
             <Route path="/Listageneral"  element={  <Listageneral /> } />
             <Route path="/Modificar"  element={  <Modificar /> } />
             <Route path="/Borrar"  element={  <Borrar /> } />
         </Routes >
   </div> 
  );
}

export default App
