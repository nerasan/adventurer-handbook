import { React, useState } from "react";

function Side() {
    const [sidetasks, setSidetasks] = useState([
      { 
        content: 'you are seeing the Side.js component',
        isCompleted: true,
      },
      {
        content: 'daily comms',
        isCompleted: false,
      },
      {
        content: 'check in',
        isCompleted: false,
       }
    ]);
  
    function toggleTodoCompleteAtIndex(index) {
      const temporarySidetasks = [...sidetasks];
      temporarySidetasks[index].isCompleted = !temporarySidetasks[index].isCompleted;
      setSidetasks(temporarySidetasks);
    }
  
    return (
      <>
        <div className="sidebar-box sticky-note-text">
          <ul>
            {sidetasks.map((sidetask, i) => (
              <div className={`todo ${sidetask.isCompleted && 'todo-is-completed'}`}>
                <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                  {sidetask.isCompleted && (
                    <span>&#x2714;</span>
                  )}
                </div>
                <div>{sidetask.content}</div>
              </div>
            ) )}
          </ul>
        </div>
      </>
          )
  }

export default Side