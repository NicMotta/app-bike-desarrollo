import React, {useState, useEffect} from 'react'

function Clima({lat, lng}) {

  //console.log(lat);

  //const lat = 54.46565;
  //const lng = 13.54635;

  const [state, setState] = useState({
    temperature: '',
    humidity: '',
    wind: '',
    error: null,
  });


const getClima = async() => {

  const API_KEY = 'c65e2b7a0909702cdfebb886dc682768';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;


  const response = await fetch(API_URL);
  const data = await response.json();

  setState({
    temperature: data.main.temp,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  });
}

useEffect(() => {
  getClima();
}, [lat])


return (
  <div>
    <h4 className="text-center font-bold text-lg p-2">Clima</h4>
      <div className='flex'>
        <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Temperatura: {state.temperature} °C</p>
        <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Humedad: {state.humidity} %</p>
        <p className="text-center w-1/2 bg-slate-100 m-1 p-1 font-bold rounded-md">Viento: {state.wind} m/s</p>
      </div>
  </div>
);

}

export default Clima