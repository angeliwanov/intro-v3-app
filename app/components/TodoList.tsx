import Todo from './Todo'

interface Todo {
  id: number
  content: string
}

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
