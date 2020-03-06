import React from 'react'
import '../style/checkBox.css'


class CheckBox extends React.Component {
  render() {
    return(
      <div className='checkBoxContainer'>
        <input className='theCheckBox' type='checkbox' />
        <p className='checkBoxText'> {this.props.task} </p>
      </div>
    )
  }
}

export default CheckBox