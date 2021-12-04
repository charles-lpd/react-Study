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
  replaceShow = (id,title) => {
    //replace 跳转 携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
    
    //replace 跳转 携带search参数
    this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
  
   //replace 跳转 携带state参数
   this.props.history.replace({pathname:'/home/message/detail',state:{id:id,title:title}})
  
  }
  pushShow = (id,title) => {
    //push 跳转  携带params 参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push 跳转 携带 search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    //push 跳转 携带 state参数
    this.props.history.push({pathname:'/home/message/detail',state:{id:id,title:title}})
  }
  //前进
  goPage = () => {
    this.props.history.goForward()
  }
  //回退
  black = () => {
    this.props.history.goBack()
  }
  //前进或者后退几个
  go = () => {
    // 自定义 前进或者后退几个页面
    this.props.history.go(2) //负值为后退几个
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递 params 参数 */}
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link> */}
                &nbsp;&nbsp; &nbsp; <button onClick={()=> this.pushShow(item.id,item.title)}>push查看</button>
                &nbsp; <button onClick={()=> this.replaceShow(item.id,item.title)}>replace查看</button>
                {/* 向路由组件传递 search 参数 */}
                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}
                {/* 向路由组件传递 state 参数 */}
                <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>&nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 注册路由的时候就要   声明接受params参数 */}
        {/* <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}

        {/* search参数无需声明接受，正常注册路由即可*/}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state 参数无需声明接受，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}></Route>
        
        <button onClick={this.goPage} >前进</button>
        <button onClick={this.black}>回退</button>
        <button onClick={this.go}>前进</button>
      </div>
    );
  }
}
