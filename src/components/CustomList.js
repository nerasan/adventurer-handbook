import React, { useState } from 'react';
import logo from '../logo.svg';

function CustomList() {
  const [todos, setTodos] = useState([
    { 
      content: 'you are seeing the Custom List component',
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

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  function autogrowBox(e) {
    e.style.height = "10px";
    e.style.height = (e.scrollHeight)+"px";
  }

  return (
    <>
        {/* <img src={logo} className="logo" alt="logo" /> */}
      <form className="todo-list sticky-note-text">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <textarea
                type="text" 
                value={todo.content} 
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
                oninput={e => autogrowBox(e)}
              />
            </div>
          ) )}
        </ul>
      </form>
    </>
  );
}

export default CustomList;