# App-Bike (en desarrollo)
---
#### Desarrollado por Nic Motta para el proyecto Data-Nec

Se trata de una **PWA** en **React.js** que registra datos y los envia a una base de datos, utiliza:
- Sensor API (Giroscopio)
- Geolocation API
- Weather API
- Firebase

**CSS:**
- Basado en **Material UI**
- **Tailwind**
- **Material Icons**

#### Configurar Firebase

src/firebase/firebaseConfig.js: 

``` javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};
```
