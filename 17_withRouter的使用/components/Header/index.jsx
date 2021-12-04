import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  black = () => {
    this.props.history.goBack();
  };
  goPage = () => {
    this.props.history.goForward();
  };
  //前进或者后退几个
  go = () => {
    // 自定义 前进或者后退几个页面
    this.props.history.go(2); //负值为后退几个
  };
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={this.black}>回退</button>
        <button onClick={this.goPage}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
export default withRouter(Header);
//withRouter 可以加工一般组件， 让一般组件具有路由组件所特有的Api
// withRouter 的返回值式一个新组件
