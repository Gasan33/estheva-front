import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fetchAppointmentsData } from '../../services/admin/appointments';

interface Appointment {
    id: number;
    image: string;
    title: string;
    service_name: string;
    appointment_date: string;
    appointment_time: string;
    status: string;
}

interface AppointmentsContextType {
    appointments: Appointment[];
    loading: boolean;
    setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

export const useAppointmentsContext = () => {
    const context = useContext(AppointmentsContext);
    if (!context) {
        throw new Error('useAppointmentsContext must be used within an AppointmentsProvider');
    }
    return context;
};

interface AppointmentsProviderProps {
    children: ReactNode;
}

export const AppointmentsProvider: React.FC<AppointmentsProviderProps> = ({ children }) => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        const getAppointments = async () => {
            const data = await fetchAppointmentsData();
            setAppointments(data);
            setLoading(false);
        };
        getAppointments();
    }, []);

    return (
        <AppointmentsContext.Provider value={{ appointments, loading, setAppointments, setLoading }}>
            {children}
        </AppointmentsContext.Provider>
    );
};
