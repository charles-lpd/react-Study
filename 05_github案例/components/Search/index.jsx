import React, { Component } from "react";
import axios from "axios";
import './index.css'
export default class Search extends Component {

    search = () => {
        const {value} = this.keyWordElement
        //发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        // 发送网络请求
       axios.get(`/api1/search/users?q=${value}`).then(res=>{
           //请求成功通知app更新状态
        this.props.updateAppState({isLoading:false,user:res.data.items})
    }).catch(err=>{
        this.props.updateAppState({isLoading:false,err:err.message})
    })
    }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">点击搜索用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
