import React from 'react'
import CheckBox from './CheckBox'
import '../style/todoList.css'


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