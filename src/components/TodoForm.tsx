import React, { useState } from 'react'

export const TodoForm: React.FC = () => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title)
            setTitle('')
            
        }
    }

    return (
        <div className="input-field mt2">
            <input 
                onChange={changeHandler}
                value={title}
                type="text" 
                id='title' 
                placeholder='Add a task'
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='title' className='active'>
                Add a task
            </label>
        </div>
    )
}
