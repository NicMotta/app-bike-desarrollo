
// TODO -> Opcion 1: Leer la geolocalizacion cada vez que cambie y no cada un segundo. Que Geolocalizacion y sensores vayan por caminos diferentes. Es decir, un archivo para geolocalizacion y otro para sensores (sensores cada x tiempo).
// TODO - Disenar una intefaz de usuario para los botones y la data a mostrar, header? footer? Que se va a mostrar?.


import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState(null);
  // const [colorEstado, setColorEstado] = useState('red'); //! Modifcar

  // * Prueba
  const [geo, setGeo] = useState([
    {
      lat: 0,
      lng: 0,
    }
  ]);

  const [sensor, setSensor] = useState([]);

  const [inicio, setInicio] = useState(false);

  // * Buenas manera de hacer un timer
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     //* Aca se ejecuta algo cada 1000 ms
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  //* Llama a la funcion getLocation que utiliza watchPosition, actualiza cada vez que nota un cambio de posicion.
  // TODO Voy a guardar por un lado las diferentes posiciones del watchPosition en un archivo, independiente del gyroscopio.
  // TODO Cambiar color del fondo entre rojo y verde segun el estado.


  //! No me guarda lat y lng en localStorage! No entiendo por que
  useEffect(() => {
    getLocation();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {

      function leerDatos(event) {

        const nuevoSensor = {
          x: event.alpha,
          y: event.beta,
          z: event.gamma,
        }

        setSensor([...sensor, nuevoSensor]);

        if (inicio) {
        localStorage.setItem('valorSensor', JSON.stringify(sensor));
       }
      }
  
      window.addEventListener("deviceorientation", leerDatos);
  
      return () => {
        window.removeEventListener("deviceorientation", leerDatos);
      };
      
    }, 1000);
    return () => clearInterval(interval);
  }, [inicio]);

  useEffect(() => {
 
  });

  //* Dentro de esta misma funcion getLocation() podria incluir el guarddo en el localStorage los valores de lat y lng.

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Navegador no compatible.");
      // setColorEstado('red'); //! Modificar para que funcione
    } else {
      setStatus("Geolocalizando...");
      navigator.geolocation.watchPosition(
        (position) => {
          setStatus("Inicio exitoso, geolocalizando.");
          
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);

          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          setGeo([...geo, newLocation]);

          if (inicio) {
            localStorage.setItem('valorGeo', JSON.stringify(lat, lng));
           }

          // setColorEstado('green'); //! Modificar para que funcione

        },
        () => {
          setStatus("No es posible establecer tu ubicación.");
          // setColorEstado('red'); //! Modificar para que funcione
        }
      );
    }
  };

  const iniciarApp = () => {
    setInicio(!inicio);
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
      <h1 className="bg-gray-300 text-center text-xl m-auto font-bold p-1">App-bike</h1>

      <h4 className="text-center font-bold text-lg p-2">Coordenadas</h4>
      
      <div className="flex">
      <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Latitud: {lat}</p>
      <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Longitud: {lng}</p>
      </div>

      <p className="text-center text-xs w-full bg-red-300 m-1 p-1">{status}</p>

      <br />
      
      <h1 className="text-center font-bold text-lg p-2">Valores giroscopio</h1>

      <div className="flex">
      <p className="text-center w-1/3 bg-slate-100 m-1 p-1 font-bold rounded-md">X: {}</p>
      <p className="text-center w-1/3 bg-slate-100 m-1 p-1 font-bold rounded-md">Y: {}</p>
      <p className="text-center w-1/3 bg-slate-100 m-1 p-1 font-bold rounded-md">Z: {}</p>
      </div>

      <div className="text-center">
      <button onClick={iniciarApp} className='p-3 m-3 text-base font-bold bg-gray-400 rounded-lg'>Iniciar</button>
      <button onClick={detenerApp} className='p-3 m-3 text-base font-bold bg-gray-400 rounded-lg'>Detener</button>
      <button onClick={limpiarApp} className='p-3 m-3 text-base font-bold bg-gray-400 rounded-lg'>Reset</button>
      
      <p className="text-center text-xs w-full bg-slate-200 m-1 p-1">Estado de inicio: {inicio ? "Encendido" : "Apagado"}</p>
      </div>
    </div>
  );
}

export default App;
