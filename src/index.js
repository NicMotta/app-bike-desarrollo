import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';

import TheRealShit from './theRealShit';
import Header from './Header';
import Coordenadas from "./Coordenadas";
import SensorGy from "./SensorGy";



ReactDOM.render(
  <>
  <Header/>
  <SensorGy />
  <Coordenadas />
  <TheRealShit/>
  </>,
  document.getElementById('root')
);


serviceWorkerRegistration.register();
reportWebVitals();
