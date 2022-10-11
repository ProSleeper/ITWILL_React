import React, {createContext, useState} from 'react'

export const TodosContext = createContext()

const TodosProvider = ({children}) => {

  const [data, setData] = useState([
    {id: 1, name: '배수지1'},
    {id: 2, name: '배수지2'},
    {id: 3, name: '배수지3'},
    {id: 4, name: '배수지4'},
    {id: 5, name: '배수지5'},
  ])

  const onDelete = (id) => {
    setData(data.filter((item) => {
      return item.id !== id
    }))
  }

  return (
    <TodosContext.Provider value={{data, onDelete}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider