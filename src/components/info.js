import React from "react";

const Info = props => (
    <div className="infoText"> 
        <p className="time">{props.time}</p>
        <p className="temp">{props.temp} °C</p>
        <p className="tempFeels">Ощущается как: {props.tempFeels} °C</p>
    </div>
);

export default Info;