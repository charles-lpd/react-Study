import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./index.css";
export default class List extends Component {

    state = { // 初始化状态
        user:[], //user初始值为数组
        isFirst:true, // 是否为第一次打开页面
        isLoading:true, // 表示是否处于加载中
        err:''
    }
    //组件挂载完成
    componentDidMount(){
        PubSub.subscribe('atguigu',(_,data)=>{
            console.log(data)
            this.setState(data)
        })
    }
    //组件销毁
    componentWillUnmount(){
      PubSub.unsubscribe('atguigu')
    }

  render() {
      const{user,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
        isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : 
        isLoading ? <h2>Loading......</h2> : 
        err ? <h2 style={{color:'red'}}>{err}</h2> :
        user.map((userObj) => {
          return (
            <div className="card" key={userObj.id}>
              <a
                rel="noreferrer"
                href={userObj.html_url}
                target="_blank"
              >
                <img
                  alt=""
                  src={userObj.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
