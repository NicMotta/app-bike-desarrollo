import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13}
      style={{height : '200px', width: '200px', margin: 'auto'}}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
  )
}

export default Map