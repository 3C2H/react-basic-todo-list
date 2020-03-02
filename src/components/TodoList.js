import React from 'react'
import CheckBox from './CheckBox'
import '../style/todoList.css'


class TodoList extends React.Component {
  render() {
    return(
      <div className='TodoListContainer'>
        <CheckBox todoText='first task'/>
        <CheckBox todoText='second task'/>
        <CheckBox todoText='third task'/>
      </div>
    )
  }
}

export default TodoList