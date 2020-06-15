import React, { Component, Fragment } from 'react';
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
        ],
        code: `
import React, { Component, Fragment } from 'react';
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
        `,
        childCode: `
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.deleteItem}>{this.props.content}</li>
        );
    }
    deleteItem() {
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

// 类型校验
Child.propTypes = {
    index: PropTypes.number,
    content: PropTypes.string,
    deleteItem: PropTypes.func
}

Child.defaultProps={
    conten: '默认内容'
}
    
export default Child;
        `
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
                <h2>代码如下</h2>
                <pre>
                    <code>
                        {this.state.code}
                    </code>
                </pre>
                <h2>Child组件代码如下</h2>
                <pre>
                    <code>
                        {this.state.childCode}
                    </code>
                </pre>
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