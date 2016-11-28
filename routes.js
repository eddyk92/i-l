// routes.js
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// Store
import AppStore from './stores/AppStore'

// Main component
imprt App from './components/App'


// Pages
import Blog from './components/Pages/Blog'
import Default from './components/Pages/Default'
import Exercises from './components/Pages/Exercises'
import NoMatch from '//components/Pages/NoMatch'

export default (
	<Route path='/' data={AppStore.data} component={App}>
		<IndexRoute component={Home}/>
		<Route path="about" component={About}/>
		<Route path="exercises" component={Exercises}/>
		<Route path="contact" component={Contact}/>
		<Route path="/exercises/:slug" component={Exercises}/>
		<Route path="/blog/:slug" component={Blog}/>
		<Route path="*" component={NoMatch}/>
		</Route>
)



