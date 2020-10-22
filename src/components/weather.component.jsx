import React,{Component} from "react";
import Generatedata from "./weather.utils";

import "./weather.style.css";

class Weathercontent  extends Component {
    state = { 
      data: ''
    }
    
    componentDidMount(){
      this.fetchdata();
    }

    fetchdata= () => {
      let long;
      let lat;
      let data;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/68af9a32b3246670b7dd91a428846c1a/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(Data => {
                data = Generatedata(Data);
                this.setState({data});
             
                  })
                });
            }
            else{
              alert("Please reload page and click allow");
            }   
    }

    render() { 

      const {date,summary,temperature,timezone,windSpeed,weather} = this.state.data;
        return ( 
            <div className="content">
            <div className="card">
            <section className="location">
        <div className="city">{timezone}</div>
                <div className="date">{date}</div>
              </section>
              <div className="current">
                <div className="temp">{temperature}<span>°c</span></div>
                <div className="weather-wind">
                  <p className='weather'>{weather}</p>
                  <p className="wind-speed">{`${windSpeed}km/h`}</p>
                </div>
                <div className="possible-weather">{summary}</div>
              </div>
                </div>
            </div>
         );
    }
}
 
export default Weathercontent;