import React, {useState, useEffect} from 'react';

function SensorGy(inicio) {


  const [sensor, setSensor] = useState([]);
  const [sensor2, setSensor2] = useState([]);

  // const [sensorX, setSensorX] = useState();
  // const [sensorY, setSensorY] = useState();
  // const [sensorZ, setSensorZ] = useState();


  // * Buena manera de hacer un timer
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     //* Aca se ejecuta algo cada 1000 ms
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  //* Llama a la funcion getLocation que utiliza watchPosition, actualiza cada vez que nota un cambio de posicion.
  // TODO Voy a guardar por un lado las diferentes posiciones del watchPosition en un archivo, independiente del gyroscopio.
  // TODO Cambiar color del fondo entre rojo y verde segun el estado.


useEffect(() => {
    const interval = setInterval(() => {

      window.addEventListener("deviceorientation", leerDatos);

      function leerDatos(event) {

        const nuevoSensor = {
          newSensorx: event.alpha.toFixed(2),
          newSensory: event.beta.toFixed(2),
          newSensorz: event.gamma.toFixed(2)
        }

        setSensor([...sensor, nuevoSensor]);

        // setSensorX(event.alpha.toFixed(2));
        // setSensorY(event.beta.toFixed(2));
        // setSensorZ(event.gamma.toFixed(2));

        if (inicio) {
          // localStorage.setItem('valorSensor', JSON.stringify());
          setSensor2([...sensor2, nuevoSensor]);
        }
      }
  
      return window.removeEventListener("deviceorientation", leerDatos);
      
    }, 1000);
    return clearInterval(interval);
  }, []);

  return (
    <div className='my-1 border'>
    <h1 className="text-center font-bold text-lg p-2 bg-slate-100">Valores giroscopio</h1>

    <div className="flex">
    <p className="text-center w-1/3 bg-slate-100 m-1 p-1 font-bold rounded-md">X: {}</p>
    <p className="text-center w-1/3 bg-slate-100 m-1 p-1 font-bold rounded-md">Y: {}</p>
    <p className="text-center w-1/3 bg-slate-100 m-1 p-1 font-bold rounded-md">Z: {}</p>
    </div>
    </div>
  )
}

export default SensorGy