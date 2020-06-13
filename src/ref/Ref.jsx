import React, { Component } from 'react';

class RefDemo extends Component {
    state = { 
        inputValue: ''
     }
    render() { 
        return ( 
            <div>
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