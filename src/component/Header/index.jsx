import React, { Component } from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";
import "./index.css";
export default class Header extends Component {
    //对接受的props 进行类型 必要性的限制
    static propTypes ={
        addtodo: PropTypes.func.isRequired
    }
    //键盘的回调
    keyUpdata = (event) => {
      //解构
      const {target,key} = event
      //判断是否回车
    if(key!== 'Enter') return
    if(target.value.trim() === ''){
        alert('输入不能为空')
        return
    }
    const todoOBJ = {id:nanoid(), name:target.value,done:false}
    this.props.addtodo(todoOBJ)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.keyUpdata}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
