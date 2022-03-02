import React, {useState, useEffect} from 'react'
import Clima from "./Clima";

function Coordenadas(inicio) {

  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const [status, setStatus] = useState(null);

  // * Prueba
  const [geo, setGeo] = useState([{
    lat: '',
    lng: '',
  }]);

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

          // setGeo(...geo, newLocation);

          if (inicio) {
            localStorage.setItem('valorGeo', geo);
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


    //! No me guarda lat y lng en localStorage! No entiendo por que
    useEffect(() => {
      getLocation();
    }, []);


  

  return (
    <div className='my-1 border'>
    <h4 className="text-center font-bold text-lg p-2">Coordenadas</h4>
      
    <div className="flex">
    <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Latitud: {lat}</p>
    <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Longitud: {lng}</p>
    </div>

    <p className="text-center text-xs bg-red-300 p-1">{status}</p>

    <Clima props={[lat, lng]}/>
    </div>
  );
}

export default Coordenadas

