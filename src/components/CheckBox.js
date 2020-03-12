import React from 'react'
import '../style/checkBox.css'


class CheckBox extends React.Component {
  constructor() {
    super()
    this.state = {completed : Boolean}
  }

  render() {
    return(
      <div className='checkBoxContainer'>
        <input className='theCheckBox'
          type='checkbox'
          checked={this.props.completed}
          onChange={() => this.props.handleChange(this.props.id)}/>
        <p className='checkBoxText'> {this.props.task} </p>
      </div>
    )
  }
}

// // For reference
// class CheckBox extends React.Component {
//   // constructor() {
//   //   super()
//   //   this.state = {completed : Boolean}
//   // }
//   render() {

//     // let boxCheck = this.state.completed ? true : false
//     return(
//       <div className='checkBoxContainer'>
//         <input className='theCheckBox'
//           type='checkbox'
//           checked={this.props.completed}
//           onChange={ () => {console.log('clicked')} } />
//         <p className='checkBoxText'> {this.props.task} </p>
//       </div>
//     )
//   }
// }

export default CheckBox