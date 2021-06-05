import './App.css';
import Form from './components/form/form';
import Results from './components/results/results';
import Title from './components/title/title';
import {useState} from 'react';
import axios from 'axios';
import Loading from './components/loading/loading';

function App() {

  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    localTime: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })
  const [loading, setLoading] = useState(false);

  const getWeather = (event) => {
    event.preventDefault(); 
    setLoading(true);
    console.log("showed Loading");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=7b7ec9d2863e4e8c9b383436210506&q=${city}&aqi=no`)
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          localTime: res.data.location.localtime,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        })
        console.log(res.data);
        setCity("");
        setLoading(false);
      })
      .catch(error => alert("Oops, something went wrong. Reload the page to try again."));
  }

  return (
    <div className="App">
      <Title title="World Weather"/>
      <Form setCity={setCity} getWeather={getWeather} city={city}/>
      {loading ? <Loading /> : <Results results={results}/>}
    </div>
  );
}

export default App;
