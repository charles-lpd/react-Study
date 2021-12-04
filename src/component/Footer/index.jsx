import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    clear = ()=>{
      this.props.clertAllDone()
    }
    handleCheckAll = (event)=>{
      console.log(event.target.checked)
        this.props.checkAllTodo(event.target.checked)
    }
    render() {
        const {todos} = this.props
        //已完成的个数
        const doneCount = todos.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
        //总数
        const total = todos.length
        console.log(doneCount,total)
        return (
            <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.handleCheckAll}  checked={doneCount === total && total !== 0 ?  true : false}/>
            </label>
            <span>
              <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.clear}>清除已完成任务</button>
          </div>
        )
    }
}
