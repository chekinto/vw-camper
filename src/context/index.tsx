import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext(null)

interface FormDataProps {
  name: string;
  email: string;
  telephone: number;
  message: string;
}

export const AppContextProvider = ({ children }) => {
  const [formData, setFormData] = useState<FormDataProps | undefined>({})
  // const [observerNode, setObserverNode] = useState({})

  return (
    <AppContext.Provider value={{
      formData,
      setFormData
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

