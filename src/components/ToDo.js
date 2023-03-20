import React, { useState } from 'react'
import {TbTrash} from 'react-icons/tb'
import {TiEdit} from 'react-icons/ti'
import {AiOutlineCheckCircle, AiOutlineCloseCircle} from 'react-icons/ai'
import Form from './Form'

function ToDo({tasks, completeTask, removeTask, updateTask, notCompleteTask}) {

  const [edit, setEdit] = useState({id: null, value:''})

  function submitUpdate(value) {
    updateTask(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate}/>
  }

  return tasks.map((task,index) => (
    <div 
    className={(task.isComplete) ? ('todo-row-complete') : ((task.isNotComplete) ? ('todo-row-not-complete') : ('todo-row'))}
    key={index}>  {/*conditional inline*/}
        <div>
          <AiOutlineCheckCircle
              className='check-icon'
              onClick={() => completeTask(task.id)}
            />
            <AiOutlineCloseCircle
              className='undone-icon'
              onClick={() => notCompleteTask(task.id)}
            />
        </div>
        
        <div key={task.id}>  {/*key vai me ajudar a identificar qual tarefa eu to selecionando*/}
            {task.text}
        </div>

        <div>
            <TbTrash
              className='delete-icon'
              onClick={() => removeTask(task.id)}
            />
            <TiEdit
              className='edit-icon'
              onClick={() => setEdit({
                id: task.id,
                value: task.text
              })}
            />
        </div>
    </div>
  ))
}

export default ToDo
