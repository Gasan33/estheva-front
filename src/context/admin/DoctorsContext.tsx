import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fetchDoctorsData } from '../../services/admin/doctors';

interface Doctor {
    id: number;
    image: string;
    title: string;
    email: string;
    phone_number: string;
    specialty: string;
    address: string;
}

interface DoctorsContextType {
    doctors: Doctor[];
    loading: boolean;
    setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DoctorsContext = createContext<DoctorsContextType | undefined>(undefined);

export const useDoctorsContext = () => {
    const context = useContext(DoctorsContext);
    if (!context) {
        throw new Error('useDoctorsContext must be used within a DoctorsProvider');
    }
    return context;
};

interface DoctorsProviderProps {
    children: ReactNode;
}

export const DoctorsProvider: React.FC<DoctorsProviderProps> = ({ children }) => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        const getDoctors = async () => {
            const data = await fetchDoctorsData();
            setDoctors(data);
            setLoading(false);
        };
        getDoctors();
    }, []);

    return (
        <DoctorsContext.Provider value={{ doctors, loading, setDoctors, setLoading }}>
            {children}
        </DoctorsContext.Provider>
    );
};
