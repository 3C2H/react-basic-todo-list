import React from 'react'
import '../style/header.css'


class Header extends React.Component {
  render() {
    return(
      <div>
        <h1 className='title'> A simple REACT Todo List </h1>
      </div>
    )
  }
}

export default Header