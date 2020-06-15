import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="link-group">
        <p><Link to="/">首页</Link></p>
        <h2>React基础示例</h2>
        <p><Link to="/animate">动画示例</Link></p>
        <p><Link to="/animategroup">动画group示例</Link></p>
        <p><Link to="/axios">Axios请求示例</Link></p>
        <p><Link to="/component">组件示例</Link></p>
        <p><Link to="/createElement">react中创建dom元素示例</Link></p>
        <p><Link to="/dataBind">react中进行数据双向绑定示例</Link></p>
        <p><Link to="/fragment">fragment示例</Link></p>
        <p><Link to="/lifeCycle">组件生命周期示例</Link></p>
        <p><Link to="/propTypes">父子组件传值示例</Link></p>
        <p><Link to="/ref">父子组件传值示例</Link></p>
        <h2>React路由示例</h2>
        <h2>Redux示例</h2>
      </div>
    );
  }
}

export default Index;