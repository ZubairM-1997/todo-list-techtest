import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput ] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            textValue: e.target[0].value
        })

        setInput('');
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a todo' value={input} name="text" onChange={handleChange}/>
        <button className='todo-btn'>Add Todo</button>
    </form>
  )
}

export default TodoForm