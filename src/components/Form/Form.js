import {useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [city, setCity] = useState("");

    const getWeather = (event) => {
        event.preventDefault() //prevent page reload when submitted
        axios.get("https://api.weatherapi.com/v1/current.json?key=7b7ec9d2863e4e8c9b383436210506&q=London&aqi=no")
        .then(res => console.log(res))
    }

    return (
        <form>
            <input type="text" name="city" placeholder="City Name" onChange={event => setCity(event.target.value)}/>
            <button type="submit" onClick={getWeather}>Get weather</button>
        </form>
    );
}; 

export default Form;