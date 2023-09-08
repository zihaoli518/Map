import React from 'react'; 
import Map from './components/Map.jsx'

// import dotenv from 'dotenv';
// dotenv.config();

const App = (props) => {

  // Load the Google Maps JavaScript API script
  console.log(document)
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);


  return (
    <div id='app'>
      <div>hello</div>
      <Map />
    </div>
  )
}

export default App; 