import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class RefDemo extends Component {
    state = { 
        inputValue: '',
        code: `
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class RefDemo extends Component {
    state = { 
        inputValue: ''
        }
    render() { 
        return ( 
            <div>
                <p><Link to="/">首页</Link></p>
                <input type="text" ref={(input)=> {this.input = input}} onChange={this.inputChange.bind(this)}/>
                <span>{this.state.inputValue}</span>
            </div>
            );
    }
    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }
}
    
export default RefDemo;
        `
    }
    render() { 
        return ( 
            <div>
                <p><Link to="/">首页</Link></p>
                <input type="text" ref={(input)=> {this.input = input}} onChange={this.inputChange.bind(this)}/>
                <span>{this.state.inputValue}</span>
                <h2>代码如下</h2>
                <pre>
                    <code>
                        {this.state.code}
                    </code>
                </pre>
            </div>
         );
    }
    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }
}
 
export default RefDemo;