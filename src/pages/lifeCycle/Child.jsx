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