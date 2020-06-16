import React, { Component } from 'react';

class ChildPageQueryUrl extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      params: null
     };
  }
  componentDidMount() {
    console.log(this.props)
    this.setState({
      params: this.props.location.params
    })
  }
  render() {
    return (
      <div>
        <p>获取到的params参数为:</p>
        <pre>
          <code>
            {JSON.stringify(this.state.params)}
          </code>
        </pre>
      </div>
    );
  }
}

export default ChildPageQueryUrl;