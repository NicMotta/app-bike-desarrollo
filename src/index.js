import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';

import theRealFunction from './Components/theRealFunction';
import Header from './Components/Header';
import Coordenadas from "./Components/Coordenadas";
import SensorGy from "./Components/SensorGy";



ReactDOM.render(
  <>
  <Header/>
  <SensorGy />
  <Coordenadas />
  <theRealFunction/>
  </>,
  document.getElementById('root')
);


serviceWorkerRegistration.register();
reportWebVitals();
