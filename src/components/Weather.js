import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  state = {
    coords: {
      latitude: 0,
      longitude: 0,
    },
    data: {},
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coords: newCoords });
        //Api call
        axios
          .get(
            `${process.env.REACT_APP_API}&query=${this.state.coords.latitude},${this.state.coords.longitude}&units=f`
          )
          .then((res) => {
            let data = {
              location: res.data.location.name,
              temp: res.data.current.temperature,
            };
            this.setState({ data });
          });
      });
    } else {
      console.log("not supported");
    }
  }

  render() {
    const { location, temp } = this.state.data;
    return (
      <div style={{ textAlign: "right", padding: "15px 15px 0 0" }}>
        <h3>{location}</h3>
        <h4>
          {temp} &deg;<span style={{ fontSize: "20px" }}>F</span>
        </h4>
      </div>
    );
  }
}

export default Weather;
