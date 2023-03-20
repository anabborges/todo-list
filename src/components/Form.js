import React, { useState } from 'react'

function Form(props) {

    const [inputTask, setInputTask] = useState('')

    function handleInput(e) {
        setInputTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault() //função para a página não reiniciar

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: inputTask,
        })

        setInputTask('') //campo para digitar fica vazio depois do submit
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='escreva sua tarefa'
                name='text'
                className='task-input'
                value={inputTask}
                onChange={handleInput}
            />
            <button className='add-button'>
                Adicionar
            </button>
        </form>
    )
}

export default Form
