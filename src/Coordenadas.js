import React, {useState, useEffect} from 'react'
import Clima from "./Clima";
import Map from "./Map"

function Coordenadas() {

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();


    useEffect(() => {
          navigator.geolocation.watchPosition((position) => {
              setLat(position.coords.latitude);
              setLng(position.coords.longitude);
            },
          );
    }, []);
 

  return (
  <>
    <div className="m-3 rounded-md shadow shadow-gray-200 my-5">
    <h2 className="text-xl text-center font-bold text-gray-500 mb-2">GEOLOCALIZACIÓN</h2>
    <div className="grid grid-cols-2 text-center">
      <div>
        <h5 className="text-gray-500 font-bold">LATITUD</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="x" className="text-xl text-gray-800 font-bold mb-2">{lat}</p>
      </div>
      <div>
        <h5 className="text-gray-500 font-bold">LONGITUD</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="y" className="text-xl text-gray-800 font-bold mb-2">{lng}</p>
      </div>
    </div>
  </div>

  <Clima props={[lat, lng]}/>
  {/* <Map /> */}

  </>
  );
}

export default Coordenadas

