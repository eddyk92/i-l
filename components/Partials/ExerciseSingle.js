// WorkSingle.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

export default class ExerciseSingle extends Component {
  
  render(){
    
    const exercise_item = this.props.exercise_item
    
    const style = {
      marginBottom: 20
    }

    return (
      <div>
        <Link to="/exercise" className="btn btn-default" style={ style }>&lt;&lt; Back to Exercise List</Link>
        <h2>{ exercise_item.title }</h2>
        <div dangerouslySetInnerHTML={ {__html: exercise_item.content } }></div>
      </div>
    )
  }
}