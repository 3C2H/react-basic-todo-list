import React from 'react'
import CheckBox from './CheckBox'
import '../style/todoList.css'
import listOfThings from '../listOfThings'


class TodoList extends React.Component {
  constructor() {
    super()
    this.state = { todos: listOfThings }
  }

  // handleChange={this.handleChange}
  render() {
    const TodoListComponent = this.state.todos.map( item => <CheckBox key={item.id} id={item.id} task={item.task} completed={item.completed}  /> )
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