import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class AxiosDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: null
        }
    }
    componentDidMount() {
        Axios.post('http://47.100.188.220:9999/api/v1/article/list',{pageIndex: 1,pageSize: 10}).then(res => {
            console.log(res)
            this.setState({
                response: JSON.stringify(res.data)
            })
        })
    }
    render() { 
        return ( 
           <Fragment>
                {/* <button>获取数据</button> */}
                <div>{this.state.response}</div>
           </Fragment>
         );
    }
}
 
export default AxiosDemo;