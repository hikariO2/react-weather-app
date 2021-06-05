const Form = (props) => {
    

    return (
        <form>
            <input type="text" name="city" placeholder="City Name" onChange={event => props.setCity(event.target.value)}/>
            <button type="submit" onClick={props.getWeather}>Get weather</button>
        </form>
    );
}; 

export default Form;