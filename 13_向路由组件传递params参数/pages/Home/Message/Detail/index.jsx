import React, { Component } from 'react'

const data= [
    {id:'01',content:'你好'},
    {id:'02',content:'你好! liu1'},
    {id:'03',content:'你好! 未来的自己'},
    
]
export default class Detail extends Component {
    render() {
        //接受params 参数   
        const {id,title} = this.props.match.params
        console.log(this.props)
        const findxConent = data.find((item)=>{
            return item.id === id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>title : {title}</li>
                <li>content: {findxConent.content}</li>
            </ul>
        )
    }
}
