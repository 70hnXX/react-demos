import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function DynamicRoute() {
  let routeMap = [
    {
      path: '/dynamicRoute/page1',
      title: 'page1',
      exact: false,
      component: './Page1'
    },
    {
      path: '/dynamicRoute/page2',
      title: 'page2',
      exact: false,
      component: './Page2'
    },
    {
      path: '/dynamicRoute/page3',
      title: 'page3',
      exact: false,
      component: './Page3'
    }
  ]
  return (
    <div>
      <ul>
        {
          routeMap.map((item,index)=> {
            return (
              <li key={index}><Link to={item.path}>{item.title}</Link></li>
            )
          })
        }
      </ul>
      <div>
      <React.Suspense fallback={'loading'}> 
      {
          routeMap.map((item,index)=> {
            return (
              <Route key={index} path={item.path} component={React.lazy(()=> import(`${item.component}.jsx`))}></Route>
            )
          })
        }
  		 </React.Suspense>
        
      </div>
    </div>
  )
}

export default DynamicRoute