import React, {createContext, useState, useMemo} from 'react'


export const CountContext = createContext()


const CountProvider = (props) => {

  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const value = useMemo(() => ({
    count, increment, decrement
  }), [count, increment, decrement])


  return (
    <div>
      <CountContext.Provider value={value}>
        {props.children}
      </CountContext.Provider>
    </div>
  )
}

export default CountProvider