import React, { Component } from "react";
import Header from "./component/Header";
import "./App.css";
import List from "./component/List";
import Footer from "./component/Footer";
export default class App extends Component {
    state={
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'碎觉',done:true},
            {id:'003',name:'卷代码',done:false}
        ]
    }
    //用于添加一个todo
    addtodo = (todoObj) =>{
        //获取远todos
        const {todos} = this.state
        //追加一个todos
        const newTodos = [todoObj,...todos]
        console.log('这里是app',todoObj);
        //更改状态
        this.setState({todos:newTodos})
    }
    //updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        console.log(id,done);
        const {todos } = this.state
        const newTodos = todos.map((todosObj)=>{
            if(todosObj.id === id) return {...todosObj,done}
            else return todosObj
        })
        this.setState({todos:newTodos})
    }
    deleteTodo = (id)=>{
        //获取原来的todos
        const {todos} = this.state
        //  删除指定id的todo对象
        const newTods =  todos.filter((todosObj)=>{
            return  todosObj.id !== id
        })
        this.setState({todos:newTods})
    }
    //全选和全不选的回调
    checkAllTodo = (done)=>{
        console.log(done)
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    //clertAllDone 清除所有的一万曾
    clertAllDone = ()=>{
        console.log("!23")
        const {todos} = this.state
        const newTodos = todos.filter((item)=>{
            return !item.done
        })
        this.setState({todos:newTodos})
    }

  render() {
     const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
        <Header addtodo={this.addtodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer checkAllTodo={this.checkAllTodo} todos={todos} clertAllDone={this.clertAllDone}/>
        </div>
      </div>
    );
  }
}
