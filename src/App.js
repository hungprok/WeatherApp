import React, { Component } from "react";
// import React, {useState, useEffect, Component} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AwesomeComponent from "./Component/AwesomeComponent";

// function Render() {
//   let [weather, setWeather] =useState(null);

//   let currentWeather = async (lat,lng) => {
//     const api = "c034d9962f7e8539fb7b5ae6c5b9c217";
//     let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api}&units=metric`;
//     let data = await fetch(url);
//     let result = await data.json();

//     console.log(result);
//     setWeather (result);
//   }

//   let getLocation = () =>{
//     navigator.geolocation.getCurrentPosition((position) => {currentWeather(position.coords.latitude,position.coords.longitude)})
//   };
//   useEffect(getLocation,[]);

//   if(!weather){
//     return <div>Loading</div>
//   };

//   return (
//     <div className="container-fluid text-white my-auto body">
//       <div className="container mx-auto my-4 py-4">
//         <div className="row justify-content-center text-center">
//           <h1 className="col-12 display-4 my-2 py-3 text-success">
//             Awesome Weather App
//             </h1>
//           <h2 className="col-12">{weather && weather.name}</h2>
//           <h3 className="col-12 text-danger">{weather && weather.main.temp}</h3>
//           <h3 className="col-12">{weather && weather.weather[0].description}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Render;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weather: null
    }
  }
  currentWeather = async (lat, lng) => {
    try {
      // const api = "c034d9962f7e8539fb7b5ae6c5b9c217";
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_APIkey}&units=metric`;
      let data = await fetch(url);
      let result = await data.json();
      if (result.cod * 1 === 200) {
        this.setState({ weather: result });
      }
      else {
        alert("API is not correct, please wait a second or refresh the page!");
        throw new Error("API is not correct, please wait a second!"); 
      }
    } catch (error) {
      console.log(error);
    }
  }


  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => { this.currentWeather(position.coords.latitude, position.coords.longitude) })
  };

  componentDidMount() {
    this.getLocation();
    // console.log(process.env.REACT_APP_APIkey);
  };

  render() {
    if (this.state.weather === null) {
      return (
        <div>
          <AwesomeComponent />
        </div>)
    }

    return (
      <div>
        <div className="container-fluid text-white my-auto body">
          <div className="container mx-auto my-4 py-4">
            <div className="row justify-content-center text-center">
              <h1 className="col-12 display-4 my-2 py-3 text-success">
                Awesome Weather App
                 </h1>
              <h2 className="col-12">{this.state.weather.name}</h2>
              <h3 className="col-12 text-danger">{this.state.weather.main.temp}℃</h3>
              <h3 className="col-12">{this.state.weather.weather[0].description}</h3>
<div></div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default App;
