import React from 'react'
import CheckBox from './CheckBox'
import '../style/todoList.css'


class TodoList extends React.Component {
  render() {
    return(
      <div className='TodoListContainer'>
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    )
  }
}

export default TodoList