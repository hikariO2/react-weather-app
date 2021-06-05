const Form = ({
    setCity,
    getWeather
}) => {
    

    return (
        <form>
            <input type="text" name="city" placeholder="City Name" onChange={event => setCity(event.target.value)}/>
            <button type="submit" onClick={getWeather}>Get weather</button>
        </form>
    );
}; 

export default Form;