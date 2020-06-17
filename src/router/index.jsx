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
import FatherPage from '../pages/routeDemo/FatherPage'
import ChildPageQuery from '../pages/routeDemo/ChildPageQuery'
import ChildPageUrl from '../pages/routeDemo/ChildPageUrl'
import RouteNest from '../pages/routeNest/Index'
import DynamicRoute from '../pages/dynamicRoute/Index'

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
          <Route path="/routerDemo" exact component={FatherPage}></Route>
          <Route path="/routerDemo/childPageQuery" component={ChildPageQuery}></Route>
          <Route path="/routerDemo/childPageUrl/:id" component={ChildPageUrl}></Route>
          <Route path="/routeNest" component={RouteNest}></Route>
          <Route path="/dynamicRoute" component={DynamicRoute}></Route>
        </Router>
      </div>
    )
}

export default AppRouter;