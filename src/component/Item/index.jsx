import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (falg) => {
    return () => {
      this.setState({ mouse: falg });
    };
  };
  //勾选，取消勾选 某一个回调 接受id
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  //删除一个todo的回调
  handleDelete = (id) => {
    console.log("123123", id);
   if (window.confirm('确定删除嘛')){
    this.props.deleteTodo(id)
   } 
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
