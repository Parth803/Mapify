import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import {Room, Star} from "@mui/icons-material"
import "mapbox-gl/dist/mapbox-gl.css";
import "./app.css"

function App() {
  let scale = 3.5
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <div className="App">
      <Map initialViewState={{ longitude: -74, latitude: 40, zoom: 3.5 }} style={{width: "100vw", height: "100vh"}} mapboxAccessToken={process.env.REACT_APP_MAPBOX} mapStyle="mapbox://styles/mapbox/streets-v9" onZoom={(e) => {scale = e.viewState.zoom}}>
        <Marker longitude={-74.0445} latitude={40.6892} anchor="bottom">
          <Room style={{fontSize: scale*10}}/>
        </Marker>
        
        <Popup longitude={-74.0445} latitude={40.6892} anchor="bottom">
          <div className='card'>
            <label>Name:</label>
            <h4 className='name'>Statue of Liberty</h4>
            <label>Rating:</label>
            <div className='stars'>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
            </div>
            <label>Description:</label>
            <p className='description'>What a beautiful green statue.</p>
          </div>
        </Popup>
    </Map>
    </div>
  );
}

export default App;
