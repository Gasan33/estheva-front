import React, { useState } from 'react';
import { Location01Icon, Time01Icon, UserAccountIcon } from 'hugeicons-react';
import { CalendarDays, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import BookAppointmentAddress from '../BookAppintmentAddress';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ClipLoader } from 'react-spinners';
import { useToast } from '@/hooks/use-toast';
import config from '@/lib/config';

interface ScheduleAppointmentProps {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    selectedTimeSlot: TimeSlot | undefined;
    setSelectedTimeSlot: React.Dispatch<React.SetStateAction<TimeSlot | undefined>>;
    selectedLocation: string | null;
    setSelectedLocation: React.Dispatch<React.SetStateAction<string | null>>;
    selectedDoctor: number | null;
    setSelectedDoctor: React.Dispatch<React.SetStateAction<number | null>>;
    treatment: Treatment;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
    date,
    setDate,
    selectedTimeSlot,
    setSelectedTimeSlot,
    selectedLocation,
    setSelectedLocation,
    selectedDoctor,
    setSelectedDoctor,
    treatment,
}) => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null);

    const locationOptions = [
        { id: 'clinic', label: 'Clinic service', img: '/images/clinic.png' },
        // Future: { id: 'home', label: 'Home service', img: '/icons/home-care.png' },
    ];

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
            {/* Location Selection */}
            <Section title="Select Location" icon={<Location01Icon className="text-primaryColor h-5 w-5" />}>
                <div className="flex flex-wrap justify-center gap-4">
                    {locationOptions.map((option) => (
                        <SelectableCard
                            key={option.id}
                            selected={selectedLocation === option.id}
                            onClick={() => setSelectedLocation(option.id)}
                            image={option.img}
                            label={option.label}
                        />
                    ))}
                </div>
                {selectedLocation === 'home' && (
                    <Dropdown visible>
                        <BookAppointmentAddress />
                    </Dropdown>
                )}
            </Section>

            {/* Doctor Selection */}
            <Section title="Select Doctor" icon={<UserAccountIcon className="text-primaryColor h-5 w-5" />}>
                <div className="flex flex-wrap justify-center gap-4">
                    {treatment.doctors.map((doctor) => (
                        <SelectableCard
                            key={doctor.id}
                            selected={selectedDoctor === doctor.id}
                            onClick={() => {
                                setSelectedDoctor(doctor.id);
                                generateTimeSlots(doctor.id, treatment.id, format(new Date(), 'yyyy-MM-dd'));
                            }}
                            image={doctor.user.profile_picture ? `${config.env.apiEndpoint}/${doctor.user.profile_picture}` : "/images/noavatar.png"}
                            label={doctor.user.name}
                        />
                    ))}
                </div>
            </Section>

            {/* Date Selection */}
            <Section title="Select Date" icon={<CalendarDays className="text-primaryColor h-5 w-5" />}>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                        if (!selectedDoctor) {
                            toast({ title: 'Select a doctor first' });
                            return;
                        }
                        if (selectedDate) {
                            setDate(selectedDate);
                            generateTimeSlots(selectedDoctor, treatment.id, format(selectedDate, 'yyyy-MM-dd'));
                        }
                    }}
                    disabled={isPastDays}
                    className="rounded-md border bg-white shadow-md"
                />
            </Section>

            {/* Time Slot Selection */}
            {selectedDoctor && <div>
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

export default ScheduleAppointment;

// ──────────────────────────────────────────────
// 📦 Reusable Components
// ──────────────────────────────────────────────

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="flex flex-col gap-3 items-start">
        <div className="flex items-center gap-2">{icon}{title}</div>
        {children}
    </div>
);

const SelectableCard = ({
    selected,
    onClick,
    image,
    label,
}: {
    selected: boolean;
    onClick: () => void;
    image: string;
    label: string;
}) => (
    <div
        onClick={onClick}
        className={`relative flex flex-col items-center gap-2 cursor-pointer ${selected ? 'text-primaryColor' : 'text-gray-500'}`}
    >
        {selected && <CheckCircle className="absolute top-0 right-1 text-primaryColor" size={20} />}
        <div
            className={`rounded-full border-[1px] h-16 w-16 p-4 flex items-center justify-center overflow-clip border-dashed ${selected ? 'border-primaryColor bg-teal-100' : 'border-gray-300 bg-secondary'
                }`}
        >
            <Image src={image} alt={label} width={50} height={50} className="object-contain" />
        </div>
        <p className="text-sm">{label}</p>
    </div>
);

const Dropdown = ({ visible, children }: { visible: boolean; children: React.ReactNode }) => (
    <div
        className={`transition-all duration-500 overflow-hidden ${visible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    >
        {visible && children}
    </div>
);

const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const hourNum = Number(hour);
    const isAM = hourNum < 12;
    return `${hourNum % 12 || 12}:${minute} ${isAM ? 'AM' : 'PM'}`;
};
