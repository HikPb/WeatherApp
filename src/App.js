import React from 'react';
import { getAllByPlaceholderText } from '@testing-library/react';

const api = {
  key: "dskflsajflsdkfew109339fsdlk",
  base: "https://api.openweathermap.org/data/2.5"
}
function App() {
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
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/>
        </div>
        <div className="location-box">
          <div className="location">Nam Dinh, Viet Nam</div>
          <div className="date">{getDateNow(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
