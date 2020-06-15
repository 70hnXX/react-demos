import React from 'react'
import { BrowerRouter as Router, Route, Link } from 'react-router-dom';
import Index from '../pages/Index'

function AppRouter() {
    return (
      <Router>
        <Route path="/" exact component={Index}></Route>
      </Router>
    )
}

export default AppRouter;