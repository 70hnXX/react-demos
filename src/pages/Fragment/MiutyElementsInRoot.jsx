import React,{ Component ,Fragment} from "react";
import { Link } from 'react-router-dom'
class MiutyElementsInRoot extends Component {
    render() {
        return (
            <Fragment>
                <p><Link to="/">首页</Link></p>
                <div>元素1</div>
                <div>元素2</div>
            </Fragment>
        )
    }
}
export default MiutyElementsInRoot