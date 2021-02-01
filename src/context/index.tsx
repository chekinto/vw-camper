import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext(null)

interface AppContextProps {
  name: string;
  email: string;
  telephone: string | number;
  message: string;
}

export const AppContextProvider = ({ children }) => {
  const [formData, setFormData] = useState<AppContextProps>({
    name: '',
    email: '',
    telephone: '',
    message: ''
  })
  return (
    <AppContext.Provider value={{ formData, setFormData }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

