import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递 params 参数*/}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 注册路由的时候就要   声明接受params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
      </div>
    );
  }
}
