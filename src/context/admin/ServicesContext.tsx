import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fetchServicesData } from '../../services/admin/services';

interface Service {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
}

interface ServicesContextType {
    services: Service[];
    loading: boolean;
    setServices: React.Dispatch<React.SetStateAction<Service[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const useServicesContext = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error('useServicesContext must be used within a ServicesProvider');
    }
    return context;
};

interface ServicesProviderProps {
    children: ReactNode;
}

export const ServicesProvider: React.FC<ServicesProviderProps> = ({ children }) => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        const getServices = async () => {
            const data = await fetchServicesData();
            setServices(data);
            setLoading(false);
        };
        getServices();
    }, []);

    return (
        <ServicesContext.Provider value={{ services, loading, setServices, setLoading }}>
            {children}
        </ServicesContext.Provider>
    );
};
