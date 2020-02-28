import React from 'react'
import CheckBox from './CheckBox'


class TodoList extends React.Component {
  render() {
    return(
      <div>
        <div classname='TodoListContainer'>
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </div>
      </div>
    )
  }
}

export default TodoList