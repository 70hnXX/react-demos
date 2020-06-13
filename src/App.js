import React, { Component } from 'react'
// import CreateElementDemo from './demos/CreateElementDemo'
// import DataBind from './demos/DataBind'
import ComponentDemo from './demos/componentDemo'

class App extends Component {
    render() {
        return ( 
          <div >
            {/* <DataBind/> */}
            <ComponentDemo />
          </div>
        )
    }
}

export default App