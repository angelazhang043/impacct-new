import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Test from "./test"
import Header from "./header"

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div>

    <Header/>
    <LoadScript
      googleMapsApiKey="AIzaSyAxKwVEudDTYAihrUJHkAmR2X8C9CfqOpw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>

    <h2> Hello </h2>
    <Test/>
    </div>
  )
}

export default React.memo(MyComponent)



// import React from "react";
// import {
//   GoogleMap,
//   useLoadScript,
// } from "@react-google-maps/api";
// import "@reach/combobox/styles.css";
// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// }
// const center = {
//   lat: 43,
//   lng: -79
// }

// class App extends React.Component {
//   render() {

//     const { isLoaded, loadError } = useLoadScript({
//       googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//       libraries,
//     });
//     if (loadError) return "Error loading maps";
//     if (!isLoaded) return "Loading Maps";
//     return (
//       <div>
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={8}
//           center={center}
//         >
//         </GoogleMap>
//       </div >

//     )
//   }
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
