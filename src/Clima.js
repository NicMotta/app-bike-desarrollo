import React, {useState, useEffect} from 'react'

let newLat, newLng;

function Clima(props) {

  if (props.props?.[0] && props.props?.[1]) {
    newLat = props.props[0];
    newLng = props.props[1];
  }
  else{
    newLat = 31.230416;  //* Una lat y lng provisoria mientras carga la real del dispositivo
    newLng = 121.473701; //* Una lat y lng provisoria mientras carga la real del dispositivo
  }

  const [state, setState] = useState({
    temperature: '',
    humidity: '',
    wind: '',
    error: null,
  });

const getClima = async() => {

  const API_KEY = 'c65e2b7a0909702cdfebb886dc682768';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${newLat}&lon=${newLng}&appid=${API_KEY}&units=metric`;


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
}, [newLat])



return (
  <div className="m-3 rounded-md shadow shadow-gray-200 my-5">
    <h2 className="text-xl text-center font-bold text-gray-500 mb-2">CLIMA</h2>
    <div className="grid grid-cols-3 text-center">
      <div>
        <h5 className="text-gray-500 font-bold">TEMP</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="x" className="text-xl text-gray-800 font-bold mb-2">{state.temperature} ºC</p>
      </div>
      <div>
        <h5 className="text-gray-500 font-bold">HUMEDAD</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="y" className="text-xl text-gray-800 font-bold mb-2">{state.humidity} %</p>
      </div>
      <div>
        <h5 className="text-gray-500 font-bold">VIENTO</h5>
        <div className='bg-gray-200 mt-1 h-0.5 w-3/4 m-auto'></div>
        <p id="y" className="text-xl text-gray-800 font-bold mb-2">{state.wind} m/s</p>
      </div>
    </div>
  </div>
);

}

export default Clima