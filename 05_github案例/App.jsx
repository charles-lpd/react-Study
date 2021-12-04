import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
export default class App extends Component {
    state = { 
        user:[], //user初始值为数组
        isFirst:true, // 是否为第一次打开页面
        isLoading:true, // 表示是否处于加载中
        err:''
    }
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
  render(){
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
            <List {...this.state}/>
        </div>
      </div>
    );
  }
}
