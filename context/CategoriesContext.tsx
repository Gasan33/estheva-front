// context/CategoriesContext.tsx
'use client'
import { createContext, useContext } from 'react'

interface CategoriesContextType {
  categories: Category[]  // Define CategoryType based on your API response
}

export const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined)

export const useCategories = () => {
  const context = useContext(CategoriesContext)
  if (!context) throw new Error('useCategories must be used within AppProvider')
  return context
}

export const AppProvider = ({ children, categories }: { children: React.ReactNode, categories: Category[] }) => (
  <CategoriesContext.Provider value={{ categories }}>
    {children}
  </CategoriesContext.Provider>
)
