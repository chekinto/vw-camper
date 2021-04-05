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
  const [loading, setLoading] = useState(false)
  const [observeNode, setObserveNode] = useState({
    services: false,
    pricing: false,
  })

  return (
    <AppContext.Provider value={{
      loading,
      setLoading,
      formData,
      setFormData,
      observeNode,
      setObserveNode
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

