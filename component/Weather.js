import React, { Component } from "react";

export default class Weather extends Component {
    render(){
        return(
            <div>
                {this.props.city &&
                <div className="weather">
                <p>местоположение :   {this.props.city} , {this.props.country} </p>
                <p>температура :      {   this.props.temp } C°</p>
                <p>давление :         {   this.props.pressure}</p>
                <p>зоход солнца :      {   this.props.sunset}</p>
                </div>
                }
                

            </div>
        )
    }

}