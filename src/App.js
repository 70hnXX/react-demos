import React, { Component } from 'react'
import DataBind from './dataBind/DataBind'
// import PropFather from './propTypes/Father'
// import RefDemo from './ref/Ref.jsx'
class App extends Component {
    render() {
        return ( 
          <div >
            <DataBind />
            {/* <PropFather /> */}
            {/* <RefDemo /> */}
          </div>
        )
    }
}

export default App