import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function RouteNest() {
  return (
    <div>
      <ul>
        <li><Link to="/routeNest/page1">page1</Link></li>
        <li><Link to="/routeNest/page2">page2</Link></li>
        <li><Link to="/routeNest/page3">page3</Link></li>
      </ul>
      <div>
        <Route path="/routeNest/page1" component={Page1} />
        <Route path="/routeNest/page2" component={Page2} />
        <Route path="/routeNest/page3" component={Page3} />
      </div>
    </div>
  )
}

export default RouteNest