import './App.css'
import Form from './components/Form/Form'
import Results from './components/Results/Results'
import Title from './components/Title/Title'
import {useState} from 'react'
import axios from 'axios'

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
  const getWeather = (event) => {
    event.preventDefault(); 
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
      })
  }

  return (
    <div className="App">
      <Title title="World Weather"/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
