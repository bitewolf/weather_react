import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "a67beca4caf74f3b11c47d014661d391";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error:  undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


      
      let timeSunrise = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.sys.sunrise*1000);
      let timeSunset = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.sys.sunset*1000);

      let pressure = data.main.pressure;
      let pressureInMmHg = Math.floor(pressure * 0.75006);



      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: pressureInMmHg,
        sunrise: timeSunrise,
        sunset: timeSunset,
        error: undefined

      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"

      });
    }
  };

  render () {
    return (
      <div className="wrapper">
        <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 info">
                    <Info />
                  </div>
                  <div className="col-sm-7 form">
                    <Form weatherMethod={this.gettingWeather} />
                    <Weather 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                    />
                  </div>
                </div>
              </div>
        
        </div>
        
        
      </div>
    );
  }
}

export default App;