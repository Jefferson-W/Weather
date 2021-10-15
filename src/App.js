import React, { useState } from 'react';
// import { Api } from './services/api.js'
import { dateBuilder } from './services/date'
import './App.css';


const api = {
  key: "3fb795b004319f0a24ee4a32e86349f9",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');

          console.log(result)
        }).catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });

    }
  }


  return (

    <div className={
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
          ? 'App warm'
          : 'App')
        : 'App'}>
      <main>
        <header className="App-header">
          <div className="search-box">
            <input type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (

            <>
              <div className="location-weather">
                <div className="location-city">                {weather.name},{weather.sys.country}
                </div>

                <div className="date">
                  {dateBuilder(new Date())}
                  {/* <div className="music">
                    Musicas recomendadas
                  </div> */}
                </div>

                <div className="degress">
                  {Math.round(weather.main.temp)}ºc
                </div>
                <div className="temp">
                  {weather.weather[0].main}
                </div>
              </div>
            </>

          ) : ('')}

        </header>
      </main>
    </div>

  );
}

export default App;
