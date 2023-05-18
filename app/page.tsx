import Image from 'next/image'
import Header from './components/Header'
import AddTodo from './components/AddTodo'

export default function Home() {
  return (
    <main>
      <div>
        <h1>Todo</h1>
        <TodoItems />
      </div>
      <AddTodo />
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
