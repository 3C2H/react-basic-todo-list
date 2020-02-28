import React from 'react'
import CheckBox from './CheckBox'


class TodoList extends React.Component {
  render() {
    return(
      <div className='TodoListContainer'>
        <div>
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </div>
      </div>
    )
  }
}

export default TodoList