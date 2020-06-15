import React,{Component,Fragment} from 'react'

class DataBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '添加内容',
            contentList: ['内容1','内容2']
        }
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>添加内容</button>
                </div>
                <ul ref={(ul)=> {this.ul = ul}}>
                    {
                        this.state.contentList.map((item, index)=> {
                            return (
                                <li 
                                key={index} 
                                onClick={this.deleteItem.bind(this,index)}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            contentList: [...this.state.contentList,this.state.inputValue],
            inputValue: ''
        },() => {
            // setState是一个异步操作,在它的回调函数里面是虚拟dom更新后执行的代码
            console.log('执行插入后的列表数量为: ' + this.ul.querySelectorAll('li').length)
        })
    }
    deleteItem(index) {
        this.setState({
            contentList: this.state.contentList.filter((item,itemIndex)=> itemIndex !== index)
        })
    }
}

export default DataBind