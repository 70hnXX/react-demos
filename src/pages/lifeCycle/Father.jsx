import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Child from './Child'

class Father extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '添加内容',
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
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '添加内容',
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
    }
    componentWillMount() {
        console.log("componentWillMount----------组件即将挂载")
    }
    componentDidMount() {
        console.log("componentDidMount----------组件完成挂载")
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate----------组件更新前")
        return true // false的话,后面的componentWillUpdate和render将不再执行
    }
    componentWillUpdate() {
        console.log("componentWillUpdate----------组件即将更新")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate--------组件更新完毕")
    }
    render() {
        console.log("render---------渲染")
        return (
            <Fragment>
                <p><Link to="/">首页</Link></p>
                <input type="text" value={this.state.inputValue} onChange={this.inputOnchange.bind(this)} />
                <button onClick={this.addItem.bind(this)}>添加内容</button>
                <ul>
                    {
                        this.state.contentList.map((item, index) => {
                            return <Child key={item.id} index={index} content={item.content} deleteItem={this.deleteItem.bind(this)} />
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
            contentList: [...this.state.contentList, {
                id: this.state.contentList.length > 0 ? this.state.contentList[this.state.contentList.length - 1].id + 1 : 1,
                content: this.state.inputValue
            }],
            inputValue: ""
        })
    }
    deleteItem(index) {
        console.log(index)
        this.setState({
            contentList: this.state.contentList.filter((item, itemIndex) => itemIndex !== index)
        })
    }
}

export default Father;
            `,
            childCode: `
            import React, { Component } from 'react';
    
            class Child extends Component {
                constructor(props) {
                    super(props)
                    this.deleteItem = this.deleteItem.bind(this)
                }
                // 给子组件添加此生命周期,可以通过判断是否更新组件来提高性能
                shouldComponentUpdate(nextProps,nextState) {
                    //  有变化才更新
                    if (nextProps.content !== this.props.content) {
                        return true
                    } else {
                        return false
                    }
                }
                // 组件第一次存在与dom中,此函数不会被执行
                // 如果已经存在于dom中,函数才会被执行
                componentWillReceiveProps() {
                    console.log('child-componentWillReceiveProps-------')
                }
                componentWillUnmount() {
                    console.log('child-componentWillUnmount-------')
                }
                render() { 
                    console.log('child render')
                    return ( 
                        <li onClick={this.deleteItem}>{this.props.content}</li>
                    );
                }
                deleteItem() {
                    console.log(this.props.index)
                    this.props.deleteItem(this.props.index)
                }
            }
             
            export default Child;
            `
        }
    }
    componentWillMount() {
        console.log("componentWillMount----------组件即将挂载")
    }
    componentDidMount() {
        console.log("componentDidMount----------组件完成挂载")
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate----------组件更新前")
        return true // false的话,后面的componentWillUpdate和render将不再执行
    }
    componentWillUpdate() {
        console.log("componentWillUpdate----------组件即将更新")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate--------组件更新完毕")
    }
    render() {
        console.log("render---------渲染")
        return (
            <Fragment>
                <p><Link to="/">首页</Link></p>
                <input type="text" value={this.state.inputValue} onChange={this.inputOnchange.bind(this)} />
                <button onClick={this.addItem.bind(this)}>添加内容</button>
                <ul>
                    {
                        this.state.contentList.map((item, index) => {
                            return <Child key={item.id} index={index} content={item.content} deleteItem={this.deleteItem.bind(this)} />
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
            contentList: [...this.state.contentList, {
                id: this.state.contentList.length > 0 ? this.state.contentList[this.state.contentList.length - 1].id + 1 : 1,
                content: this.state.inputValue
            }],
            inputValue: ""
        })
    }
    deleteItem(index) {
        console.log(index)
        this.setState({
            contentList: this.state.contentList.filter((item, itemIndex) => itemIndex !== index)
        })
    }
}

export default Father;