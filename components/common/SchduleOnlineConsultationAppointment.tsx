import React, { useState } from 'react';
import { Time01Icon } from 'hugeicons-react';
import { CalendarDays } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ClipLoader } from 'react-spinners';
import { useToast } from '@/hooks/use-toast';

interface ScheduleOnlineConsultationAppointmentProps {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    selectedTimeSlot: TimeSlot | undefined;
    setSelectedTimeSlot: React.Dispatch<React.SetStateAction<TimeSlot | undefined>>;
    doctorId: number | null;
}

const ScheduleOnlineConsultationAppointment: React.FC<ScheduleOnlineConsultationAppointmentProps> = ({
    date,
    setDate,
    selectedTimeSlot,
    setSelectedTimeSlot,
    doctorId,

}) => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null);


    const isPastDays = (day: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return day < today;
    };

    const generateTimeSlots = async (doctorId: number | null, treatmentId: number, selectedDate: string) => {
        if (!doctorId) return;

        try {
            setLoading(true);
            const response = await fetch('/api/treatments/time_slots', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ doctor_id: doctorId, treatment_id: treatmentId, date: selectedDate }),
            });

            const result = await response.json();

            if (response.ok && result.code === 200) {
                setTimeSlots(result.data);
            } else {
                throw new Error(result.error || 'Failed to generate time slots.');
            }
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.message || 'Something went wrong while generating time slots.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-6">

            {/* Date Selection */}
            <Section title="Select Date" icon={<CalendarDays className="text-primaryColor h-5 w-5" />}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                        if (selectedDate) {
                            setDate(selectedDate);
                            generateTimeSlots(doctorId, 39, format(selectedDate, 'yyyy-MM-dd'));
                        }
                    }}
                    disabled={isPastDays}
                    className="rounded-md border bg-white shadow-md"
                />
            </Section>

            {/* Time Slot Selection */}
            {doctorId && <div>
                <div className="flex gap-2 items-center">
                    <Time01Icon className="text-primaryColor h-5 w-5" />
                    Select Time
                </div>
                <div className="grid grid-cols-3 mt-4 gap-2">
                    {loading ?
                        <div className="container mx-auto p-4 flex justify-center items-center h-full">
                            <ClipLoader size={50} color="#3498db" loading={loading} />
                        </div>
                        : timeSlots != null && timeSlots.map((item) => (
                            <div key={item.id} className="py-2 flex items-center">
                                <div
                                    onClick={() =>
                                        item.is_available === 1
                                            ? setSelectedTimeSlot(item)
                                            : toast(
                                                { title: 'This Time is not Available. Please try another one.' }
                                            )
                                    }
                                    className={`py-2 w-full justify-center items-center flex rounded-lg font-semibold ${item.is_available === 1
                                        ? 'bg-gray-300 text-gray-950 hover:bg-primaryColor cursor-pointer'
                                        : 'bg-gray-50 text-gray-500'
                                        } ${item === selectedTimeSlot &&
                                        'bg-primaryColor text-white'
                                        }`}
                                >
                                    {formatTime(item.start_time)}
                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>}
        </div>
    );
};

export default ScheduleOnlineConsultationAppointment;


const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="flex flex-col gap-3 items-start">
        <div className="flex items-center gap-2">{icon}{title}</div>
        {children}
    </div>
);


const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const hourNum = Number(hour);
    const isAM = hourNum < 12;
    return `${hourNum % 12 || 12}:${minute} ${isAM ? 'AM' : 'PM'}`;
};
