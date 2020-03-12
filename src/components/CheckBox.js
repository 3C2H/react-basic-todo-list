import React from 'react'
import '../style/checkBox.css'


class CheckBox extends React.Component {
  constructor() {
    super()
    this.state = {completed : Boolean}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) { this.setState(prevState =>{
    console.log('changed', id)
    // return {
    //   prevState : prevState ? false : true
    // }
  }
  )}

  render() {

    // let boxCheck = this.state.completed ? true : false
    return(
      <div className='checkBoxContainer'>
        <input className='theCheckBox'
          type='checkbox'
          checked={this.props.completed}
          onChange={() => this.handleChange(this.props.id)}/>
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