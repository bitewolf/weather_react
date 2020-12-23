import React from "react";

const Form = props => (
<div>
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Введите город"/>
        <button>Искать</button>
    </form>
</div>
)
export default Form;