import React, {useState} from 'react'
import axios from 'axios'

function App() {


  //STORING API
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=5551f94e4c229c7a71af0047d2831ba9'


  //REQUEST DATA
  


  return (
    <div className="App">
      <div className="Container">
        <div className="top">
          <p>Istanbul</p>
        </div>
        <div className="temp">
          <h1>25°C</h1>
        </div>
        <div className="description">
          <p>Sunny</p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>27°C</p>
          </div>
          <div className="humidity">
            <p>%70</p>
          </div>
          <div className="wind">
            3.1 m/s
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
