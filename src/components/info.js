import React from "react";

const Info = props => (
    <div>
        <p>{props.temp} °C</p>
        <p>Ощущается как:{props.tempFeels} °C</p>
    </div>
);

export default Info;