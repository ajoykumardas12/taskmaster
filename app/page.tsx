"use client"
import Image from 'next/image'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import { useEffect, useState } from 'react'
import { TodoItemT } from '@/types/types'
import TodoRow from './components/TodoRow'

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
    localStorage.setItem("taskmasterTodos", JSON.stringify(newTodos));
    setTodoItems(newTodos);
  }

  const addTodo = (newTodo: TodoItemT) => {
    const newTodos = [...todoItems];
    newTodos.push(newTodo);

    updateTodos(newTodos);
  }

  const deleteTodo = (id: string) => {
    const newTodos = todoItems.filter(todoItem => todoItem.id != id);

    updateTodos(newTodos);
  }

  const toggleCompleted = (id: string) => {
    const newTodos = todoItems.map(todoItem => {
      if(todoItem.id === id){
        return {...todoItem, isCompleted: !todoItem.isCompleted}
      }
      return todoItem;
    });
    
    updateTodos(newTodos);
  }

  return (
    <main className='flex flex-col items-center bg-white'>
      <div className='p-10'>
        <h1 className='text-center'>Todos</h1>
        <div className='flex flex-col gap-2'>
          { todoItems &&
            todoItems.map((todoItem) => {
              return(
                <TodoRow 
                  key={todoItem.id} 
                  todoItem={todoItem} 
                  toggleCompleted={toggleCompleted}
                  deleteTodo={deleteTodo} 
                />
              )
            })
          }
        </div>
      </div>
      <AddTodo addTodo={addTodo} />
    </main>
  )
}