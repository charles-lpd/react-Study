import React, { Component } from 'react'
// import qss from 'querystring'
const data= [
    {id:'01',content:'你好'},
    {id:'02',content:'你好! liu1'},
    {id:'03',content:'你好! 未来的自己'},
    
]


export default class Detail extends Component {
    render() {
        //接受params 参数 
        // const {id,title} = this.props.match.params
        // console.log(this.props)

        //接受search 参数
        // const {search} = this.props.location
        // const {id,title} = qss.parse(search.slice(1))
        
        //接受state 参数
        const {id,title} = this.props.location.state


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
