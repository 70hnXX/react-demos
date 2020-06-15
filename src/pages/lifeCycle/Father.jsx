import React, { Component,Fragment } from 'react';
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
        console.log('componentWillMount----------' + '组件即将挂载')
    }
    componentDidMount() {
        console.log('componentDidMount----------' + '组件完成挂载')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate----------' + '组件更新前')
        return true // false的话,后面的componentWillUpdate和render将不再执行
    }
    componentWillUpdate() {
        console.log('componentWillUpdate----------' + '组件即将更新')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate--------' + '组件更新完毕')
    }
    render() { 
        console.log('render---------' + '渲染')
        return ( 
            <Fragment>
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