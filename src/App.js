import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './myComponents/Header';
import { Footer } from './myComponents/Footer';
import { Todos } from './myComponents/Todos';
import { Additem } from './myComponents/Additem';
import { About } from './myComponents/About';
// import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let Sno;
  const onDelete = (todo) => {
    console.log("I am on delete", todo)
    // deleting this way doesnot work in react 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding a Todo", title, desc)
    if (todos.length === 0) {
      Sno = 1;
    }
    else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const addTodo = {
      Sno: Sno,
      title: title,
      Desc: desc
    }
    setTodos([...todos, addTodo])
    console.log(addTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Dolist" />
        <Routes>
          <Route exact path="/" element={(
            <>
              <Additem addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          )}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
