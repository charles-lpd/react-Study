import React, { Component } from "react";
import {Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header/>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                  {/* <a className="list-group-item" href="./about.html">
                  About
                </a>
                <a className="list-group-item active" href="./home.html">
                  Home
                </a> */}
                  {/* 在React中考路由链接实现切换组件---编写路由链接 */}
                  {/* <NavLink    className="list-group-item" to="/about">
                    About
                  </NavLink>
                  <NavLink     className="list-group-item" to="/home">
                    Home
                  </NavLink> */}
                  <MyNavLink to="/about" a={1} b={2} c ={3} children>ABOUT</MyNavLink>
                  <MyNavLink to="/home" children>Home</MyNavLink>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    <Routes>
                      <Route  path="/about" element={<About/>}/>
                      <Route path="/home"  element={<Home/>} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
