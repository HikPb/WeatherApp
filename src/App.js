import React, {useState} from 'react';

const api = {
  key: "d9694a97f629a90cf2cffbc4fadac42d",
  base: "https://api.openweathermap.org/data/2.5"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = event =>{
    if(event.key ==="Enter"){
      fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}&lang=vi`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result)
        setQuery('')
        console.log(result)
      })
    }
  }
  const getDateNow = (d)=>{
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"]
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main !="undefined") ?((weather.main.temp <15)?'app cold':((weather.main.temp <26)?'app warm':'app hot')):'app cold'}>
      <main>
        <div className="search-box">
          <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..."
          onChange={e=> setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{getDateNow(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="status">
                {weather.weather[0].description}
              </div>
            </div>
          </div>
        ):('')}
      </main>
    </div>
  );
}

export default App;
