import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Index.css'

import Index from '../pages/Index'
import AnimateDemo from '../pages/animateDemo/index'
import AnimateGroupDemo from '../pages/animateDemo/Father'
import AxiosDemo from '../pages/axiosDemo/index'
import ComponentDemo from '../pages/componentDemo/Father'
import CreateElementDemo from '../pages/CreateElementDemo/CreateElementDemo'
import DataBind from '../pages/dataBind/DataBind'
import Fragment from '../pages/Fragment/MiutyElementsInRoot'
import LifeCycle from '../pages/lifeCycle/Father'
import PropTypes from '../pages/propTypes/Father'
import Ref from '../pages/ref/Ref'

function AppRouter() {
    return (
      <div className="link-group">
        <Router>
          <Route path="/" exact component={Index}></Route>
          <Route path="/animate" component={AnimateDemo}></Route>
          <Route path="/animategroup" component={AnimateGroupDemo}></Route>
          <Route path="/axios" component={AxiosDemo}></Route>
          <Route path="/component" component={ComponentDemo}></Route>
          <Route path="/createElement" component={CreateElementDemo}></Route>
          <Route path="/dataBind" component={DataBind}></Route>
          <Route path="/fragment" component={Fragment}></Route>
          <Route path="/lifeCycle" component={LifeCycle}></Route>
          <Route path="/propTypes" component={PropTypes}></Route>
          <Route path="/ref" component={Ref}></Route>
        </Router>
      </div>
    )
}

export default AppRouter;