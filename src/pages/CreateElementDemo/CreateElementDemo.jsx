import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class CreateElementDemo extends Component {
    render() {
        return (
            
            // 第一种
            <div>
                <p><Link to="/">首页</Link></p>
                <ul className="list">
                    <li>hello</li>
                    <li>world</li>
                </ul>
            </div>
        )
        // 第二种
        // var child1 = React.createElement('li',null,'hello')
        // var child2 = React.createElement('li',null,'world')
        // var root = React.createElement('ul',{className:'list'},child1,child2)
    }
}
export default CreateElementDemo