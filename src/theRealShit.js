import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc, addDoc } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

function TheRealShit() {

  const [status, setStatus] = useState('No iniciado');
  const [datosGy, setDatosGy] = useState(0);
  const [datosGeo, setDatosGeo] = useState(0);


  //useEffect(() => {

  const getUsuarios = async () => {
    // const datos = await getDocs(collection(db, 'usuarios'));
    // console.log(datos.docs[0].data());
    // const verUsuarios = datos.docs.map(doc => doc.data());
    // return verUsuarios;

    await addDoc(collection(db, "usuarios"), {

    });
  };

  //getUsuarios();

  //})

  let geoArray = [];
  let newGeoArray = [];
  let gyArray = [];
  let newGyArray = [];

  useEffect(() => {
    window.addEventListener("deviceorientation", (event) => {
      console.log(event.alpha);
      //event.rotationRate.alpha;

      const nuevoSensor = {
        x: event.alpha.toFixed(2),
        y: event.beta.toFixed(2),
        z: event.gamma.toFixed(2),
      };

      gyArray.push(nuevoSensor);
      console.log(gyArray.length);
      setDatosGy(gyArray.length);
      
    });
  }, []);

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      const coordsUpdate = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      geoArray.push(coordsUpdate);
      console.log(geoArray);
      setDatosGeo(geoArray.length);

      // setCoords([...coords, coordsUpdate]);
      // console.log(coords);
    });
  }, []);

  

  //TODO Probar el metodo reduce


  const naturalReducer = () => {
    for (let a = 0; a < gyArray.length; a = a + 10) {
      newGyArray.push(gyArray[a]);
    }

    for (let a = 0; a < geoArray.length; a = a + 2) {
      newGeoArray.push(geoArray[a]);
    }

    console.log(newGeoArray.length, newGyArray.length);
  };


  return (
    <>
      <div className="m-3 rounded-md shadow shadow-gray-200 my-5">
        <h2 className="text-xl text-center font-bold text-gray-500 mb-2">INFORMACIÓN</h2>
        <div className="grid grid-cols-3 text-center">
          <div>
            <h5 className="text-gray-500 font-bold">DATOS GY</h5>
            <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
            <p className="text-xl text-gray-800 font-bold mb-2">{datosGy}</p>
          </div>

          <div>
            <h5 className="text-gray-500 font-bold">DATOS GEO</h5>
            <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
            <p className="text-xl text-gray-800 font-bold mb-2">{datosGeo}</p>
          </div>

          <div>
            <h5 className="text-gray-500 font-bold">TIEMPO</h5>
            <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
            <p className="text-xl text-gray-800 font-bold mb-2">{}</p>
          </div>
        </div>
      </div>

      <footer className=' fixed right-0 bottom-0 left-0'>
        <div className="text-center bg-gray-200 my-4 m-3">
          <span className="font-bold">Estado: </span>
          {status}
        </div>
          <div className="grid grid-cols-4 place-items-center text-gray-200">
            
            <button 
              onClick={() => {setStatus('Iniciado')}} 
              className="btn-floating btn-large waves-effect waves-light grey darken-4 m-2 mb-4">
              <i className="material-icons">play_arrow</i>
            </button>

            <button 
              onClick={() => {setStatus('Detenido')}} 
              className="btn-floating btn-large waves-effect waves-light grey darken-4 m-2 mb-4">
              <i className="material-icons">stop</i>
            </button>

            <button 
              onClick={() => {setStatus('Subido')}} 
              className="btn-floating btn-large waves-effect waves-light grey darken-4 m-2 mb-4">
              <i className="material-icons">cloud</i>
            </button>

            <button 
              onClick={() => {setStatus('Eliminado')}} 
              className="btn-floating btn-large waves-effect waves-light grey darken-4 m-2 mb-4">
              <i className="material-icons">delete</i>
            </button>

        </div>
      </footer>
    </>
  );
}

export default TheRealShit;
