"use client"
import Image from 'next/image'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import { useEffect, useState } from 'react'
import { TodoItemT } from '@/types/types'

export default function Home() {
  const [todoItems, setTodoItems] = useState<TodoItemT[]>([]);

  useEffect(() => {
    const todosJSON: string | null = localStorage.getItem("taskmasterTodos");
    if(todosJSON){
      const todos = JSON.parse(todosJSON);
      setTodoItems(todos);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateTodos = (newTodos: TodoItemT[]) => {
    setTodoItems(newTodos);
    localStorage.setItem("taskmasterTodos", JSON.stringify(newTodos));
  }

  const addTodo = (newTodo: TodoItemT) => {
    const newTodos = todoItems;
    newTodos.push(newTodo);
    console.log("adding todo", newTodos);

    updateTodos(newTodos);
  }

  return (
    <main className='flex flex-col items-center bg-white'>
      <div className='p-10'>
        <h1>Todo</h1>
        <TodoItems />
      </div>
      <AddTodo addTodo={addTodo} />
    </main>
  )
}

function TodoItems(){


  return (
    <div>
      items
    </div>
  )
}
