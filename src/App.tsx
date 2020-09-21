import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])

    
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window
      .confirm('Are you sure you want to delete this task?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <Navbar/>
      <div className='container'>
        <TodoForm 
          onAdd={addHandler}
        />
        <TodoList 
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  )
}

export default App

