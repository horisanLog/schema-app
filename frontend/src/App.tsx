import React, { useEffect, useState } from 'react'
import { PublicTodo } from './openApis/types/public-todo'
import { publicApi } from './openApis/publicApi'

export const publicTodo: PublicTodo = { id: 0, name: 'test' }

const App: React.FC = () => {
  const [todos, setTodos] = useState<PublicTodo>(publicTodo)

  const fetchStudentPaymentLog = async () => {
    try {
      const response = await publicApi.publicTodosGet()
      setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchStudentPaymentLog()
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      <p>{todos.id}</p>
      <p>{todos.name}</p>
    </>
  )
}

export default App
