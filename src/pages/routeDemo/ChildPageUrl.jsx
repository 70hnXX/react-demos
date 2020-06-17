import React, { Component } from 'react';
import { useLocation } from 'react-router-dom'

class ChildPageQueryUrl extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      params: null,
      query: null
     };
  }
  componentDidMount() {
    console.log(this.props)
    this.getParams()
    this.setState({
      params: this.props.match.params
    })
  }
  getParams() {
    let search = this.props.location.search
    function getUrlParam (name) {
      const url = window.location.href.substring(window.location.href.indexOf('?'))
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      const r = url.substr(1).match(reg)
      if (r != null) {
          return unescape(r[2])
      }
      return null
    }
    let query = {}
    query['a'] = getUrlParam('a')
    query['b'] = getUrlParam('b')
    this.setState({
      query:query
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