import React, { useState } from 'react';
import { Location01Icon, Time01Icon } from 'hugeicons-react';
import { CalendarDays, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import BookAppointmentAddress from '../BookAppintmentAddress';
import { Calendar } from '@/components/ui/calendar';
import { format } from "date-fns";
import { ClipLoader } from 'react-spinners';
import { useToast } from '@/hooks/use-toast';

interface SchduleAppointmentProps {
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

const SchduleAppointment: React.FC<SchduleAppointmentProps> = ({
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
    const locationOptions = [
        { id: 'clinic', label: 'Clinic service', img: '/images/clinic.png' },
        { id: 'home', label: 'Home service', img: '/icons/home-care.png' },
    ];
    const isPastDays = (day: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return day < today;
    };
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[] | null>(null)
    const generateTimeSlots = async (doctor_id: number | null, treatment_id: number, date: string) => {

        try {
            setLoading(true);
            const response = await fetch("/api/treatments/time_slots", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    doctor_id: doctor_id,
                    treatment_id: treatment_id,
                    date: date
                }),
            });

            const result = await response.json();
            if (result.code == 200) {
                console.log(result.data);
                setTimeSlots(result.data);
            }


            if (!response.ok) throw new Error(result.error || "Failed to Generate Time Slots");

            // alert("Time Slots Generated successfully!");

            return true;
        } catch (error: any) {
            alert(error.message || "Something went wrong");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex flex-col gap-4">
                {/* Location */}
                <div className="flex flex-col gap-3 items-baseline">
                    <div className="flex gap-2 items-center">
                        <Location01Icon className="text-primaryColor h-5 w-5" />
                        Select Location
                    </div>
                    <div className="flex flex-col w-full md:flex-row items-center gap-4 justify-center mt-4">
                        {locationOptions.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setSelectedLocation(option.id)}
                                className={`relative flex flex-col items-center gap-2 cursor-pointer ${selectedLocation === option.id
                                    ? 'text-primaryColor'
                                    : 'text-gray-500'
                                    }`}
                            >
                                {/* Checkmark */}
                                {selectedLocation === option.id && (
                                    <CheckCircle
                                        className="absolute top-0 right-1 text-primaryColor"
                                        size={20}
                                    />
                                )}
                                {/* Circle */}
                                <div
                                    className={`rounded-full border-[1px] ${selectedLocation === option.id
                                        ? 'border-primaryColor bg-teal-100'
                                        : 'border-gray-300 bg-secondary'
                                        } h-16 w-16 border-dashed p-4 flex items-center justify-center`}
                                >
                                    <Image
                                        src={option.img}
                                        alt={option.label}
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                                <p>{option.label}</p>
                            </div>
                        ))}
                    </div>
                    <Down treatment={treatment} show={selectedLocation === 'home'} />
                </div>
                {/* Select Doctor */}
                <div className="flex flex-col gap-3 items-baseline">
                    <div className="flex gap-2 items-center">
                        <Location01Icon className="text-primaryColor h-5 w-5" />
                        Select Doctor
                    </div>
                    <div className="flex flex-col w-full md:flex-row items-center gap-4 justify-center mt-4">
                        {treatment.doctors.map((doctor, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedDoctor(doctor.id)}
                                className={`relative flex flex-col items-center gap-2 cursor-pointer ${selectedDoctor === doctor.id
                                    ? 'text-primaryColor'
                                    : 'text-gray-500'
                                    }`}
                            >
                                {/* Checkmark */}
                                {selectedDoctor === doctor.id && (
                                    <CheckCircle
                                        className="absolute top-0 right-1 text-primaryColor"
                                        size={20}
                                    />
                                )}
                                {/* Circle */}
                                <div
                                    className={`rounded-full border-[1px] ${selectedDoctor === doctor.id
                                        ? 'border-primaryColor bg-teal-100'
                                        : 'border-gray-300 bg-secondary'
                                        } h-16 w-16 border-dashed flex items-center justify-center overflow-clip`}
                                >
                                    <Image
                                        src={doctor.user.profile_picture ?? "/images/noavatar.png"}
                                        alt={doctor.user.first_name}
                                        width={50}
                                        height={50}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <p>{doctor.user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Select Date */}
                <div className="flex flex-col gap-3 items-baseline">
                    <div className="flex gap-2 items-center">
                        <CalendarDays className="text-primaryColor h-5 w-5" />
                        Select Date
                    </div>
                    <div className="flex items-baseline ">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => {
                                if (!selectedDoctor) {
                                    alert("Please select a doctor first.");
                                    // toast({
                                    //     title: "Error",
                                    //     description: "Please select a doctor first."

                                    // });
                                    return;
                                }
                                if (date) {
                                    console.log(format(date, "yyyy-MM-dd"));
                                    setDate(date);
                                    generateTimeSlots(selectedDoctor, treatment.id, format(date, "yyyy-MM-dd"))
                                }
                            }}
                            disabled={isPastDays}
                            className="rounded-md border w-auto bg-white shadow-md"
                        />
                    </div>
                </div>
                {/* Time Slot */}
                <div>
                    <div className="flex gap-2 items-center">
                        <Time01Icon className="text-primaryColor h-5 w-5" />
                        Select Time
                    </div>
                    <div className="grid grid-cols-3 mt-4 gap-2">
                        {loading ?
                            <div className="container mx-auto p-4 flex justify-center items-center h-full">
                                <ClipLoader size={50} color="#3498db" loading={loading} />
                            </div>
                            : timeSlots != null ? timeSlots.map((item) => (
                                <div key={item.id} className="py-2 flex items-center">
                                    <div
                                        onClick={() =>
                                            item.is_available === 1
                                                ? setSelectedTimeSlot(item)
                                                : alert(
                                                    'This Time is not Available. Please try another one.'
                                                )
                                        }
                                        className={`py-2 w-full justify-center items-center flex rounded-lg font-semibold ${item.is_available === 1
                                            ? 'bg-gray-300 text-gray-950 hover:bg-primaryColor cursor-pointer'
                                            : 'bg-gray-50 text-gray-500'
                                            } ${item === selectedTimeSlot &&
                                            'bg-primaryColor text-white'
                                            }`}
                                    >
                                        {item.start_time.slice(0, 5)}{' '}
                                        {Number(item.start_time.split(':')[0]) < 12
                                            ? 'AM'
                                            : 'PM'}
                                    </div>
                                </div>
                            ))
                                : treatment.time_slots.map((item) => (
                                    <div key={item.id} className="py-2 flex items-center">
                                        <div
                                            onClick={() =>
                                                item.is_available === 1
                                                    ? setSelectedTimeSlot(item)
                                                    : alert(
                                                        'This Time is not Available. Please try another one.'
                                                    )
                                            }
                                            className={`py-2 w-full justify-center items-center flex rounded-lg font-semibold ${item.is_available === 1
                                                ? 'bg-gray-300 text-gray-950 hover:bg-primaryColor cursor-pointer'
                                                : 'bg-gray-50 text-gray-500'
                                                } ${item === selectedTimeSlot &&
                                                'bg-primaryColor text-white'
                                                }`}
                                        >
                                            {item.start_time.slice(0, 5)}{' '}
                                            {Number(item.start_time.split(':')[0]) < 12
                                                ? 'AM'
                                                : 'PM'}
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchduleAppointment;

const Down = ({ treatment, show }: { treatment: Treatment; show: boolean }) => {
    return (
        <div
            className={`w-full h-[600px] xl:h-screen mt-8 xl:mt-0 transition-all duration-500 overflow-hidden ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
        // data-aos="fade-up" // AOS animation for dropdown content
        // data-aos-delay="300" // Delay for dropdown
        >
            {show && <BookAppointmentAddress />}
        </div>
    );
};
