import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getData = () => {
    axios
      .get("/api1/students")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getCar = () => {
    axios
      .get("/api2/cars")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.getData}>点击获取数据</button>
        <button onClick={this.getCar}>点击获取数据</button>
      </div>
    );
  }
}
