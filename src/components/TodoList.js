import React from 'react'
import CheckBox from './CheckBox'
import '../style/todoList.css'
import listOfThings from '../listOfThings'


class TodoList extends React.Component {
  render() {
    const TodoListComponent = listOfThings.map( item => <CheckBox key={item.id} task={item.task}/> )
    console.log(TodoListComponent)
    return(
      <div className='TodoListContainer'>
        {TodoListComponent}
        {/* <CheckBox todoText='first task'/>
        <CheckBox todoText='second task'/>
        <CheckBox todoText='third task'/> */}
      </div>
    )
  }
}

export default TodoList