import React,{ Component ,Fragment} from "react";
import { Link } from 'react-router-dom'
class MiutyElementsInRoot extends Component {
    state={
        code: `
import React,{ Component ,Fragment} from "react";
import { Link } from 'react-router-dom'
class MiutyElementsInRoot extends Component {
    render() {
        return (
            <Fragment>
                <p><Link to="/">首页</Link></p>
                <div>元素1</div>
                <div>元素2</div>
                <h2>代码如下</h2>
            </Fragment>
        )
    }
}
export default MiutyElementsInRoot
        `
    }
    render() {
        return (
            <Fragment>
                <p><Link to="/">首页</Link></p>
                <div>元素1</div>
                <div>元素2</div>
                <h2>代码如下</h2>
                <pre>
                    <code>
                        {this.state.code}
                    </code>
                </pre>
            </Fragment>
        )
    }
}
export default MiutyElementsInRoot