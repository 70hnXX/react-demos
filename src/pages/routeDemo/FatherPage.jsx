import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.jump = this.jump.bind(this)
  }
  render() {
    return (
      <div>
        <p><Link to={{pathname: "/routerDemo/ChildPageUrl/123?sid=456&token=ejcky"}}>跳转到子页面,使用url的形式带上query参数,刷新不会消失</Link></p>
        <p><Link to={{pathname: "/routerDemo/ChildPageQuery",query:{'name':"Taylor Swift2" }}}>跳转到子页面,并带上query参数</Link></p>
        <p><button onClick={this.jump}>使用函数进行跳转(query中的参数刷新消失)</button></p>
      </div>
    );
  }
  jump() {
    this.props.history.push(
      {
        pathname: '/routerDemo/ChildPageQuery',
        query: {
          name: 'Taylor Swift'
        }
      }
    )
  }
}

export default FatherPage;