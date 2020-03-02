import React from 'react'
import '../style/checkBox.css'


class CheckBox extends React.Component {
  render() {
    return(
      <div className='checkBoxContainer'>
        <p className='checkBoxText'>thing to do (do not procrastinate !!)</p>
        <input className='theCheckBox' type='checkbox' />
      </div>
    )
  }
}

export default CheckBox