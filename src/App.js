import React, { Component } from 'react'
// import DataBind from './dataBind/DataBind'
// import PropFather from './propTypes/Father'
// import RefDemo from './ref/Ref.jsx'
import LifeCycle from './lifeCycle/Father'
class App extends Component {
    render() {
        return ( 
          <div >
            {/* <DataBind /> */}
            {/* <PropFather /> */}
            {/* <RefDemo /> */}
            <LifeCycle />
          </div>
        )
    }
}

export default App