import React from "react";

const Weather = props => (
        <div>
        { props.city && 
        <div className="infoWeather">
            <p>Местоположение: {props.city},{props.country}</p>
            <p>Давление: {props.pressure}</p>
            <p>Температура сейчас: {props.temp}</p>
            <p>Восход солнца: {props.sunrise}</p>
            <p>Закат солнца: {props.sunset}</p>
        </div>
        }
        <p className="error">{props.error}</p>
        
    </div>
    );


export default Weather;