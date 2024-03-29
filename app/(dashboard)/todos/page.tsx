import TodoList from '@/app/components/TodoList'
import db from '../../../utils/db'

interface Todo {
  id: number
  createdAt: Date
  content: string
  completed: boolean
}

const getData = async () => {
  // await new Promise((resolve, reject) => setTimeout(reject, 1000))
  const todos = await db.todo.findMany({})
  return todos
}

export default async function TodosPage() {
  const todos = await getData()

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
