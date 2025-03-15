import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className='container'>
      <>
        <h5>{todo.title}</h5>
        <p>{todo.Desc}</p>
        <button className='btn btn sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
        <hr />
      </>
    </div>
  )
}
