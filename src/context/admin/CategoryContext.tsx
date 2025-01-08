import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchCategoriesData } from '../../services/admin/category';

interface Category {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface CategoryContextType {
    categories: Category[];
    loading: boolean;
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Custom hook to access the Category context
export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategoryContext must be used within a CategoryProvider');
    }
    return context;
};

// Type for children prop
interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCategories = async () => {
            const data = await fetchCategoriesData();
            setCategories(data);
            setLoading(false);
        };
        getCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, loading, setCategories, setLoading }}>
            {children}
        </CategoryContext.Provider>
    );
};
