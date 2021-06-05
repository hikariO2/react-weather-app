import styles from "./form.module.css";

const Form = ({
    setCity,
    getWeather,
    city
}) => {
    

    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="City Name" onChange={event => setCity(event.target.value)} value={city} />
            <button type="submit">Get weather</button>
        </form>
    );
}; 

export default Form;