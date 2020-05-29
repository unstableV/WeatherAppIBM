import React, { Component } from 'react';
import './App.css';
import Titles from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'


class App extends Component {
  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    const city = e.target.elements.City.value
    const country = e.target.elements.Country.value
    e.preventDefault();
    if (city && country) {
      const api_call = await fetch(`http://localhost:8082/getweather?city=${city}&country=${country}`)
      const data = await api_call.json()
      console.log(data);
      if((data.cod == "404")&&(data.message == "city not found")){
        this.setState({
          temprature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error:"City not found"});
      }
      else{
        this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
  }
    else if (city) {
      
      const api_call = await fetch(`http://localhost:8082/getweather?city=${city}&country=${country}`)
      const data = await api_call.json()
      console.log(data);
      if((data.cod == "404")&&(data.message == "city not found")){
        this.setState({
          temprature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error:"City not found"});
      }
      else{
        console.log(data);
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
  }
    else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please specify the city name at least'
      })

    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temprature={this.state.temprature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App