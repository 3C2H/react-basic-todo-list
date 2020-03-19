import React from 'react'
import '../style/checkBox.css'


class CheckBox extends React.Component {
  constructor() {
    super()
    this.state = {completed : Boolean}
  }

  render() {
    const completedStyle = {
      fontStyle : "italic",
      color : 'red',
      textDecoration : "line-through"
    }
    
    return(
      <div className='checkBoxContainer'>
        <input className='theCheckBox'
          type='checkbox'
          checked={this.props.completed}
          onChange={() => this.props.handleChange(this.props.id)}/>
        <p className='checkBoxText' style={this.props.completed ? completedStyle : null}> {this.props.task} </p>
      </div>
    )
  }
}

export default CheckBox