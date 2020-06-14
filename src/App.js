import React, { Component } from 'react'
// import DataBind from './dataBind/DataBind'
// import PropFather from './propTypes/Father'
// import RefDemo from './ref/Ref.jsx'
// import LifeCycle from './lifeCycle/Father'
// import AxiosDemo from './axiosDemo/index'
// import AnimationDemo from './animateDemo/index'
import AnimationGroup from './animateDemo/Father'
class App extends Component {
    render() {
        return ( 
          <div >
            {/* <DataBind /> */}
            {/* <PropFather /> */}
            {/* <RefDemo /> */}
            {/* <LifeCycle /> */}
            {/* <AxiosDemo /> */}
            {/* <AnimationDemo /> */}
            <AnimationGroup />
          </div>
        )
    }
}

export default App