// WorkList.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class ExerciseList extends Component {

  scrollTop(){
    $('html, body').animate({
      scrollTop: $("#main-content").offset().top
    }, 500)
  }

  render(){
    
    let data = this.props.data
    let item_num = data.item_num
    let exercise_items = data.exercise_items

    let load_more
    let show_more_text = 'Show More Exercises'

    if(data.loading){
      show_more_text = 'Loading...'
    }

    if(exercise_items && item_num <= exercise_items.length){
      load_more = (
        <div>
          <button className="btn btn-default center-block" onClick={ this.props.getMoreexerciseItems.bind(this) }>
            { show_more_text }
          </button>
        </div>
      )
    }

    exercise_items = _.take(exercise_items, item_num)
    
    let articles_html = exercise_items.map(( exercise_item ) => {
      let date_obj = new Date(exercise_item.created)
      let created = (date_obj.getMonth()+1) + '/' + date_obj.getDate() + '/' + date_obj.getFullYear()
      return (
        <div key={ 'key-' + exercise_item.slug }>
          <div className="post-preview">
            <h2 className="post-title pointer">
              <Link to={ '/exercise/' + exercise_item.slug } onClick={ this.scrollTop }>{ exercise_item.title }</Link>
            </h2>
            <p className="post-meta">Posted by <a href="https://cosmicjs.com" target="_blank">Invincible Leaders</a> on { created }</p>
          </div>
          <hr/>
        </div>
      )
    })

    return (
      <div>
        <div>{ articles_html }</div>
        { load_more }
      </div>
    )
  }
}