import React, { useState } from 'react';
import logo from '../logo.svg';

function List() {
  const [todos, setTodos] = useState([
    { 
      content: 'you are seeing the (Fixed) List component',
      isCompleted: true,
    },
    {
      content: 'get haircut',
      isCompleted: false,
    },
    {
      content: 'build todo app in react',
      isCompleted: false,
     }
  ]);

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <>
      <div className="todo-list sticky-note-text">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <div>{todo.content}</div>
            </div>
          ) )}
        </ul>
      </div>
    </>
        )
}

export default List;