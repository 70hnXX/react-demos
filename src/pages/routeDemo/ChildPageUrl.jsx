import React, { Component } from 'react';

class ChildPageQueryUrl extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: null
     };
  }
  componentDidMount() {
    console.log(this.props)
    this.setState({
      query: this.props.location.query
    })
  }
  render() {
    return (
      <div>
        <p>获取到的query参数为:</p>
        <pre>
          <code>
            {JSON.stringify(this.state.query)}
          </code>
        </pre>
      </div>
    );
  }
}

export default ChildPageQueryUrl;