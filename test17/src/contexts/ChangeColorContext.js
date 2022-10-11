import React, {createContext} from 'react'
import { useState, useMemo } from 'react';

export const ChangeColorContext = createContext()


const ChangeColorProvider = ({children}) => {

  const [color, setColor] = useState('green');

  const onColor = (text) => {
    setColor(text)
  }

  const value = useMemo(() => ({
    color, onColor
  }), [color, onColor])
  

  return (
    <ChangeColorContext.Provider value={value}>
      {children}
    </ChangeColorContext.Provider>
  )
}

export default ChangeColorProvider