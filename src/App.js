import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "a67beca4caf74f3b11c47d014661d391";

class App extends React.Component {

  state = {
    temp: undefined,
    tempFeels: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error:  undefined,
    weather: undefined,
    hour: undefined,
    time: undefined,
    timezone: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    
    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      console.log(data.weather[0].description);
           
      let temp = Math.floor(data.main.temp*10) / 10;
      let tempFeels = Math.floor(data.main.feels_like*10) / 10;

      let pressure = data.main.pressure;
      let pressureInMmHg = Math.floor(pressure * 0.75006);

      let weatherWithoutSpace = data.weather[0].description;
      weatherWithoutSpace = weatherWithoutSpace.replace(/ +/g, '').trim();
      console.log(weatherWithoutSpace);

      const newLocal = new Date();
      let timeLocal = newLocal;
      
      let hourNow = timeLocal.getHours() + timeLocal.getTimezoneOffset()/60 + data.timezone/3600;
      let time = timeLocal.getDate() +" "+ timeLocal.toLocaleString('ru-RU', { month: 'short' }) +" "+timeLocal.getHours() +":"+ timeLocal.getMinutes();
      
      let timeSunrise = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.sys.sunrise*1000 + timeLocal.getTimezoneOffset()*60000 + data.timezone*1000);
      let timeSunset = new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.sys.sunset*1000 + timeLocal.getTimezoneOffset()*60000 + data.timezone*1000);
      
      this.setState({
        timeLocal: timeLocal,
        temp: temp,
        tempFeels: tempFeels,
        city: data.name,
        country: data.sys.country,
        pressure: pressureInMmHg,
        sunrise: timeSunrise,
        sunset: timeSunset,
        error: undefined,
        weather: weatherWithoutSpace,
        hour: hourNow,
        time: time
      });
    } else {
      this.setState({
        timeLocal: undefined,
        temp: undefined,
        tempFeels: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        weather: undefined,
        error: "Введите название города",
        hour: undefined,
        timeg: undefined
      });
    }
  };

  

  render () {
    let classWeather = 'info';
    
    if (this.state.weather)
    {
    classWeather += ' '+this.state.weather;
    };
    if (this.state.hour) {
      let hour = this.state.hour;
      if (hour < 0) {
        hour += 24;
      }
       if (hour > 23 || hour < 6)
      {
        classWeather += ' night';
      } else {
          classWeather += ' day';
      }
    }
   

    return (
      <div className="wrapperOff">
        <div className="mainOff">
              <div className="containerOff">
                <div className="window">
                  <div className={classWeather}>
                    <Info
                    time={this.state.time}
                    tempFeels={this.state.tempFeels}
                    temp={this.state.temp}
                    />
                  </div>
                  <div className="form">
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