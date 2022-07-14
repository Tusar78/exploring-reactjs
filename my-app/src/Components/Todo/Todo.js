import React, { useEffect, useState } from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))
  }, [])
  return (
    <div>
      {
        todo.map((td, ind) => {
          return <SingleTodo key={ind} todo={td}></SingleTodo>
        })
      }
    </div>
  );
};

export default Todo;