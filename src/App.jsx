import React, { useState, useEffect } from 'react';
import Map from './components/Map.jsx'

// import dotenv from 'dotenv';
// dotenv.config();

const App = (props) => {

  
  const setUpScriptOnce = () => {
    // Load the Google Maps JavaScript API script
    console.log(document)
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}&libraries=visualization,places,drawing`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  useEffect(() => {
    let once = false; 
    if (!once) {
      setUpScriptOnce();
      once = true;
    }
  
    return () => {
    }
  }, [])
  

  return (
    <div id='app'>
      <div>app</div>
      <Map />
    </div>
  )
}

export default App; 