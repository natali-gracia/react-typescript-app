import React, { useState, useRef } from 'react'

export const TodoForm: React.FC = () => {

    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
            
        }
    }

    return (
        <div className="input-field mt2">
            <input 
                // onChange={changeHandler}
                // value={title}
                ref={ref}
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
