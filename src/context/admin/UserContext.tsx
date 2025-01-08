import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fetchUsersData } from '../../services/admin/users';

interface User {
    id: number;
    image: string;
    title: string;
    email: string;
    phone_number: string;
    role: string;
}

interface UserContextType {
    users: User[];
    loading: boolean;
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsersData();
            setUsers(data);
            setLoading(false);
        };
        getUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, loading, setUsers, setLoading }}>
            {children}
        </UserContext.Provider>
    );
};
