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