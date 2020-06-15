import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import './index.css'

class AnimateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true,
            code: `
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import './index.css'

class AnimateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.toggleShow = this.toggleShow.bind(this)
    }
    render() { 
        return ( 
            <div>
                <p><Link to="/">首页</Link></p>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="animo"
                >
                    <div>内容</div>
                </CSSTransition>
                <button onClick={this.toggleShow}>切换显示</button>
            </div>
        );
    }
    toggleShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default AnimateDemo;
            `
         }
         this.toggleShow = this.toggleShow.bind(this)
    }
    render() { 
        return ( 
            <div>
                <p><Link to="/">首页</Link></p>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="animo"
                >
                    <div>内容</div>
                </CSSTransition>
                <button onClick={this.toggleShow}>切换显示</button>
                <h2>代码如下</h2>
                <pre>
                    <code>
                        {this.state.code}
                    </code>
                </pre>
            </div>
         );
    }
    toggleShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default AnimateDemo;