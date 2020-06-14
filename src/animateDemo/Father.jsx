import React, { Component,Fragment } from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Child from './Child'
import './index.css'

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
                <input type="text" value={this.state.inputValue} onChange={this.inputOnchange.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>添加内容</button>
                <ul>
                    <TransitionGroup>
                    {
                        this.state.contentList.map((item,index) => {
                           return (
                            <CSSTransition
                                timeout={2000}
                                classNames="animo"
                                unmountOnExit
                                appear={true}
                                key={index}
                            >
                                <Child key={item.id} index={index} content={item.content} deleteItem={this.deleteItem.bind(this)}/>
                            </CSSTransition>
                           )
                        })
                    }
                    </TransitionGroup>
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