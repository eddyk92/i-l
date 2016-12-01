// routes.js
import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

// Store
import AppStore from './stores/AppStore'

// Main component
import App from './components/App'

// Pages
import Blog from './components/Pages/Blog'
import Default from './components/Pages/Default'
import Blog from './components/Pages/Blog'
import Exercises from './components/Pages/Exercises'
import NoMatch from './components/Pages/NoMatch'

export default (
  <Route path="/" data={AppStore.data} component={App}>
    <IndexRoute component={Blog}/>
    <Route path="about" component={About}/>
    <Route path="exercises" component={Exercises}/>
    <Route path="contact" component={Contact}/>
    // <Route path="/work/:slug" component={Work}/>
    // <Route path="/blog/:slug" component={Blog}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)