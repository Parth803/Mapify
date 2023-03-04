import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

function App() {
  return (
    <div className="App">
      <Map
      initialViewState={{
        longitude: -74,
        latitude: 40,
        zoom: 3.5
      }}
      style={{width: "100vw", height: "100vh"}}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      <Marker longitude={-74.0445} latitude={40.6892} anchor="bottom" >
        <img src="./pin.png" />
      </Marker>
    </Map>
    </div>
  );
}

export default App;
