import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom'
import Child from './Child'

class Father extends Component {
    state = { 
        inputValue: "",
        contentList: [
            {
                id: 1,
                content: "内容1"
            },
            {
                id: 2,
                content: "内容2"
            }
        ]
     }
    render() { 
        return ( 
            <Fragment>
                <p><Link to="/">首页</Link></p>
                <input type="text" value={this.state.inputValue} onChange={this.inputOnchange.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>添加内容</button>
                <ul>
                    {
                        this.state.contentList.map((item,index) => {
                           return  <Child key={item.id} index={index} content={item.content} deleteItem={this.deleteItem.bind(this)}/>
                        })
                    }
                </ul>
            </Fragment>
        );
    }
    inputOnchange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addItem() {
        this.setState({
            contentList: [...this.state.contentList,{
                id: this.state.contentList.length > 0 ? this.state.contentList[this.state.contentList.length-1].id + 1 : 1,
                content: this.state.inputValue
            }],
            inputValue: ""
        })
    }
    deleteItem(index) {
        console.log(index)
        this.setState({
            contentList: this.state.contentList.filter((item,itemIndex) => itemIndex !== index)
        })
    }
}
 
export default Father;