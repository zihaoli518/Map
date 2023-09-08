import React, { useState, useEffect } from 'react';


const googleMapAPIKey = process.env.GOOGLE_MAP_API_KEY ;



const Map = (props) => {

  const setUpHeatMap = () => {
    const gradientArray = [
      'rgba(255, 0, 0, 0)', // transparent red
      'rgba(255, 0, 0, 1)', // opaque red
      'rgba(255, 255, 0, 1)', // opaque yellow
      'rgba(0, 255, 0, 1)', // opaque green
    ];


    if (window.google) {
      // Google Maps API is loaded, you can use it here
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Example: New York City
        zoom: 10,
      });

      const heatMapData = [
        new window.google.maps.LatLng(40.7128, -74.0060), // Example: Data point in NYC
        // Add more data points here...
      ];

      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatMapData,
      });

      heatmap.setMap(map);

      heatmap.set('gradient', gradientArray);
      heatmap.set('radius', 20);
      heatmap.set('opacity', 0.6);
    } else {
      // Google Maps API is not yet available, you can handle this case accordingly
      console.log('Google Maps API not loaded yet.');
    }
  }

  useEffect(()=>{
    setTimeout(()=> {
      setUpHeatMap();
    }, 1000)
  }, [])


  return (
    <div id='map'>
      map
    </div>
  )
}

export default Map;