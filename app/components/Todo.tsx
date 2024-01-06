'use client'
import { useTransition } from 'react'
import { completeTodo } from '@/utils/actions'
import { start } from 'repl'

const Todo = ({ todo }: { todo: any }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={`cursor-pointer border border-black/20  ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  )
}

export default Todo
