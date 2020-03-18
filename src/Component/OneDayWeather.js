import React, { Component } from 'react'

export default class OneDayWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
          weather: null
        }
      }
      currentWeather = async (lat, lng) => {
        try {
          // const api = "c034d9962f7e8539fb7b5ae6c5b9c217";
          let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_APIkey}&units=metric`;
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
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
