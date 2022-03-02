
// TODO -> Opcion 1: Leer la geolocalizacion cada vez que cambie y no cada un segundo. Que Geolocalizacion y sensores vayan por caminos diferentes. Es decir, un archivo para geolocalizacion y otro para sensores (sensores cada x tiempo).
// TODO - Disenar una intefaz de usuario para los botones y la data a mostrar, header? footer? Que se va a mostrar?.


import React, { useEffect, useState } from "react";
import Coordenadas from "./Coordenadas";
import SensorGy from "./SensorGy";
import Header from "./Header";
import Footer from "./Footer";



function App() {

  const [inicio, setInicio] = useState(false);

  const iniciarApp = () => {
    setInicio(true);
    return false;
  }

  const detenerApp = () => {
    setInicio(false);
    return false;
  }

  const limpiarApp = () => {
    localStorage.clear()
    return false;
  }

  return (

    <div className="font-mono md:max-w-screen-md m-auto"> 
      
      <Header/>
      
      <Coordenadas props = {inicio}/>
      <SensorGy props = {inicio}/>

      <div className="text-center">
      <button onClick={iniciarApp} className='p-2 m-3 text-base font-bold bg-gray-400 rounded-sm'>Iniciar</button>
      <button onClick={detenerApp} className='p-2 m-3 text-base font-bold bg-gray-400 rounded-sm'>Detener</button>
      <button onClick={limpiarApp} className='p-2 m-3 text-base font-bold bg-gray-400 rounded-sm'>Reset</button>
      
      <p className="text-xs bg-slate-200 m-auto p-1">Estado de inicio: {inicio ? "Encendido" : "Apagado"}</p>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
