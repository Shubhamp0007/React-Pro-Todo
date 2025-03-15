import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"

  }

  return (
    <div className="container my-3" style={myStyle}>
      <h5>Below is toDo list</h5>
      {props.todos.length === 0 ? "Nothing to display" :
        props.todos.map((todo) => {
          return (<TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete} />)
        })}


      {/* <TodoItem todo={props.todos[0]}/>
        <TodoItem todo={props.todos[1]}/> */}
    </div>


  )
}
