import { arrayRemove } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';

function SensorGy() {

  const [sensorX, setSensorX] = useState(0);
  const [sensorY, setSensorY] = useState(0);
  const [sensorZ, setSensorZ] = useState(0);

  useEffect(() => {

    window.addEventListener("deviceorientation", (event) => {
 
    setSensorX(event.alpha.toFixed(2));
    setSensorY(event.beta.toFixed(2));
    setSensorZ(event.gamma.toFixed(2));

  });

  return () => { 
    window.removeEventListener("deviceorientation");
  }

}, []);



  return (
    <div className="m-3 rounded-md shadow shadow-gray-200 my-5">
    <h2 className="text-xl text-center font-bold text-gray-500 mb-2">GIROSCOPIO</h2>
    <div className="grid grid-cols-3 text-center">
      <div>
        <h5 className="text-gray-500 font-bold">X</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="x" className="text-xl text-gray-800 font-bold mb-2">{sensorX}</p>
      </div>
      <div>
        <h5 className="text-gray-500 font-bold">Y</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="y" className="text-xl text-gray-800 font-bold mb-2">{sensorY}</p>
      </div>
      <div>
        <h5 className="text-gray-500 font-bold">Z</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="z" className="text-xl text-gray-800 font-bold mb-2">{sensorZ}</p>
      </div>
    </div>
  </div>
  )
}

export default SensorGy