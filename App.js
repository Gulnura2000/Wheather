import React, { Component } from "react";
import Info from "./component/Info";
import Form from "./component/Form";
import Weather from "./component/Weather";
import './style.css'

const ApiKey = "6edd516560704f53928bf0faaa64a568"



class App extends Component{
state = {
temp : undefined,
city: undefined,
country: undefined,
pressure: undefined,
sunset:undefined,
error: undefined

}



  gettingWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;


    if(city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`);
    const data = await api_url.json();

      let sunset = data.sys.sunset
      let data1 = new Date()
      data1.setTime(sunset)
      let sunset_data = data1.getHours() + ":"+ data1.getMinutes()+":"+data1.getSeconds();

    


    this.setState({
    temp : data.main.temp,
    city: data.name,
    country: data.sys.country,
    pressure:data.main.pressure ,
    sunset:sunset_data,
    error: ""
    })
  } else {
    alert('enter city')
  }

  }









  render(){
    return (
      <div>
        <Info/>
        <Form weatherMethod = {this.gettingWeather} />
        <Weather temp = {this.state.temp}  
        city = {this.state.city}
        country = {this.state.country}
        pressure = {this.state.pressure} 
        sunset = {this.state.sunset}
        error = {this.state.error}  />
      </div>
    )
  }
}
export default App;
