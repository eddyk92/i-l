// Exercises.js
import React, { Component } from 'react'
import _ from 'lodash'
import config from '../../config'

// Components
import Header from '../Partials/Header'
import ExerciseList from '../Partials/ExerciseList'
import ExerciseSingle from '../Partials/ExerciseSingle'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Exercise extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'exercise',
      post_slug: this.props.params.slug
    })
  }

  getMoreExerciseItems(){
    AppDispatcher.dispatch({
      action: 'get-more-items'
    })
  }

  render(){

    const data = this.props.data
    const globals = data.globals
    const pages = data.pages
    let main_content

    if(!this.props.params.slug){

      main_content = <ExerciseList getMoreExerciseItems={ this.getMoreExerciseItems } data={ data }/>

    } else {
      
      const exercise_items = data.exercise_items
      
      // Get current page slug
      const slug = this.props.params.slug
      const exercise_items_object = _.indexBy(exercise_items, 'slug')
      const exercise_item = exercise_items_object[slug]
      
      main_content = <ExerciseSingle data={ data } exercise_item={ exercise_item }/>

    }

    return (
      <div>
        <Header data={ data }/>
          <div id="main-content" className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              { main_content }
              </div>
          </div>
        </div>
      </div>
    )
  }
}