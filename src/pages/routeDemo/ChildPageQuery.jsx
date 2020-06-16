import React, { Component } from 'react';

class ChildPageQuery extends Component {
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

export default ChildPageQuery;