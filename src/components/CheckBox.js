import React from 'react'
import '../style/checkBox.css'


class CheckBox extends React.Component {
  constructor() {
    super()
    this.state = {completed : Boolean}
  }
  render() {

    let boxCheck = this.state.completed ? true : false
    return(
      <div className='checkBoxContainer'>
        <input className='theCheckBox' type='checkbox' checked={this.boxCheck} />
        <p className='checkBoxText'> {this.props.task} </p>
      </div>
    )
  }
}

export default CheckBox