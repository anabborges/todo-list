import React, {useState} from 'react'
import Form from './Form'
import ToDo from './ToDo'
import {AiFillBook} from 'react-icons/ai'
import {BiCoffeeTogo, BiRun} from 'react-icons/bi'
import {BsFillPencilFill} from 'react-icons/bs'

function ToDoList({}) {

    const [tasks, setTasks] = useState([])

    function addTask(task) {
        const newTasks = [task, ...tasks]

        setTasks(newTasks)
    }

    function completeTask(id) {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks)
    }

    function notCompleteTask(id) {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isNotComplete = !task.isNotComplete
            }
            return task
        })
        setTasks(updatedTasks)
    }

    function removeTask(id) {
        const remove = [...tasks].filter(task => task.id !== id)

        setTasks(remove)
    }

    function updateTask(taskId, newTask) {
        setTasks(prev => prev.map(item => (item.id == taskId ? newTask : item)))
    }

    return (
        <div className='todo-list'>
            <div className='cute-icons'>
                <AiFillBook/>
                <BiRun/>
                <BiCoffeeTogo/>
                <BsFillPencilFill/>
            </div>
            <h1>O que você precisa fazer hoje?</h1>
            <Form onSubmit={addTask}/>
            <ToDo tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask} notCompleteTask={notCompleteTask}/>
        </div>
  )
}

export default ToDoList
