import React from 'react';
import { format } from "date-fns";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { ArrowRight01Icon, Location01Icon, Recycle01Icon, Share01Icon } from 'hugeicons-react';
import Link from 'next/link';
import { CircleCheckIcon, Star, User } from 'lucide-react';
import { BsBag } from 'react-icons/bs';
import { formatTimeWithAMPM, getExactRemainingTime, getMonthName } from '@/lib/utils';



const AppointmentDetailsDailog = ({ appointment }: { appointment: Appointment }) => {


    return (
        <Dialog>
            <DialogTrigger className='flex items-start justify-start text-left'>
                <div className={`flex ${appointment.status === 'canceled' ? 'h-[100%]' : 'h-[80%]'}`}>
                    <Image
                        className={`w-[25%] h-auto object-cover rounded-tl-[16px] ${appointment.status === 'canceled' ? 'rounded-bl-[16px]' : 'rounded-br-[16px]'
                            }`}
                        src={appointment.treatment.images[0]}
                        alt={appointment.treatment.title}
                        width={600}
                        height={600}
                    />
                    <div className="flex flex-col p-2 md:p-2 h-auto gap-2 w-full">
                        <div className="flex justify-between items-start w-full text-xs md:text-sm font-medium">
                            <h1 className="line-clamp-2">{appointment.treatment.title}</h1>
                            <h2
                                className={`text-xs outline-1 outline py-1 px-2 rounded-sm ${appointment.status === 'canceled' ? 'outline-red text-red' : 'outline-primaryColor text-primaryColor'
                                    }`}
                            >
                                {appointment.status}
                            </h2>
                        </div>
                        <div className="flex gap-1 items-center text-xs text-gray-500 font-thin line-clamp-1">
                            <Location01Icon size={16} />
                            <h2 className="flex-1">{appointment.treatment.home_based === 1 ? 'Dubai - 375 Al-wasl Road' : 'Home'}</h2>
                        </div>
                        <div className="flex w-full items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2">
                                {appointment.doctor && (
                                    <>
                                        <Image
                                            src={appointment.doctor.user.profile_picture ?? "/images/noavatar.png"}
                                            alt={appointment.doctor.user.name}
                                            width={50}
                                            height={50}
                                            className="w-6 h-6 object-cover rounded-full"
                                        />
                                        <span>{appointment.doctor.user.name}</span>
                                    </>
                                )}
                            </div>
                        </div>
                        <div>
                            <h1 className="text-primaryColor">{format(new Date(appointment.appointment_date), "dd MMM yyyy")} | {formatTimeWithAMPM(appointment.appointment_time)}</h1>
                        </div>
                        <div>
                            <h2 className="text-xs text-primaryColor">{getExactRemainingTime(appointment.appointment_date, appointment.appointment_time, appointment.status)}</h2>
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>Appointment Details</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <div>
                    {/* TReatment */}
                    <div>
                        <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Treatment</h1>
                        <div className='flex gap-2 mt-2'>
                            <Image
                                src={appointment.treatment.images[0]}
                                alt={appointment.treatment.title}
                                width={400}
                                height={400}
                                className='w-[25%]  rounded-lg shadow-md object-cover'
                            />
                            <div className='flex flex-col gap-2 text-gray-400'>
                                <h1 className='text-xs md:text-lg font-semibold line-clamp-2 text-gray-950'>{appointment.treatment.title}</h1>
                                <div className='flex gap-2 line-clamp-1 '>
                                    <div className='h-3 w-3'><Location01Icon size={12} /></div>
                                    <p className='text-xs  font-thin'>{appointment.location}</p>
                                </div>
                                <div className='flex gap-2 line-clamp-1 '>
                                    <div className='h-3 w-3'><Share01Icon size={12} /></div>
                                    <p className='text-xs  font-thin line-clamp-1'>{appointment.treatment.benefits[0]}</p>
                                </div>
                                <div className='flex gap-2 line-clamp-1 '>
                                    <div className='h-3 w-3'><Recycle01Icon size={12} /></div>
                                    <p className='text-xs font-thin line-clamp-1'>{appointment.treatment.benefits[1]}</p>
                                </div>
                                <Link href={`/treatments/${appointment.treatment.id}`} className='flex justify-end items-center text-primaryColor text-xs font-thin'>
                                    <p >view details</p>
                                    <ArrowRight01Icon size={16} />
                                </Link>
                            </div>



                        </div>

                    </div>
                    {/* Doctor */}
                    <div className='w-full'>
                        <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold  mt-8'>Doctor</h1>
                        <div className='flex gap-2 mt-2 w-full'>
                            <Image
                                src={appointment.doctor.user.profile_picture ?? "/images/noavatar.png"}
                                alt={appointment.doctor.user.name}
                                width={400}
                                height={400}
                                className='w-[15%] rounded-lg shadow-md object-cover'
                            />
                            <div className='flex flex-col gap-2 text-gray-400 w-full'>
                                <h1 className='text-xs md:text-lg font-semibold line-clamp-2 text-gray-950'>{appointment.doctor.user.name}</h1>
                                <div className='flex gap-2 line-clamp-1 '>
                                    <p className='text-xs  font-thin'>{appointment.doctor.specialty}</p>
                                </div>
                                <div className='flex justify-between items-center line-clamp-1 '>
                                    <div className='flex gap-2 line-clamp-1'>
                                        <div className='h-3 w-3'>
                                            <BsBag size={12} />
                                        </div>
                                        <p className='text-xs  font-thin line-clamp-1'>+{appointment.doctor.exp} Exp</p>
                                    </div>
                                    <div className='flex gap-2 line-clamp-1'>
                                        <div className='h-3 w-3'><User size={12} /></div>
                                        <p className='text-xs font-thin line-clamp-1'>{appointment.doctor.patients}+</p>
                                    </div>
                                    <div className='flex gap-2 line-clamp-1'>
                                        <div className='h-3 w-3'><Star size={12} /></div>
                                        <p className='text-xs font-thin line-clamp-1'>4.8</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 line-clamp-1'>

                                </div>
                                <Link href={`treatments/${appointment.treatment.id}`} className='flex justify-end items-center text-primaryColor text-xs font-thin'>
                                    <p >view details</p>
                                    <ArrowRight01Icon size={16} />
                                </Link>
                            </div>



                        </div>

                    </div>
                    {/* Appointment Schedule */}
                    <div>
                        <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Appointment Schedule</h1>

                        <div className='flex flex-col gap-2 px-2 md:px-4 text-gray-400 w-full mt-4 text-xs md:text-sm lg:text-lg xl:text-xl'>

                            <div className='flex gap-2 line-clamp-1'>
                                <h1 className='w-[20%] text-primaryColor font-medium'>Date</h1>
                                :
                                <p >{appointment.appointment_date.split("-")[2]} <span className='text-primaryColor'>{getMonthName(Number(appointment.appointment_date.split("-")[1]))}</span> {appointment.appointment_date.split("-")[0]}</p>
                            </div>
                            <div className='flex gap-2 line-clamp-1'>
                                <h1 className='w-[20%] text-primaryColor font-medium'>Time</h1>
                                :
                                <p >{formatTimeWithAMPM(appointment.appointment_time)}</p>

                            </div>
                        </div>
                    </div>
                    {/* Patient Details */}
                    <div>
                        <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Patient Details</h1>

                        <div className='flex flex-col gap-2 px-2 md:px-4 text-gray-400 w-full mt-4 text-xs md:text-sm lg:text-lg xl:text-xl'>

                            <div className='flex gap-2 line-clamp-1'>
                                <h1 className='w-[20%] text-primaryColor font-medium'>Name</h1>
                                :
                                <p >{appointment.patient.name}</p>
                            </div>
                            <div className='flex gap-2 line-clamp-1'>
                                <h1 className='w-[20%] text-primaryColor font-medium'>Age</h1>
                                :
                                <p >26 year's</p>

                            </div>
                            <div className='flex gap-2 line-clamp-1'>
                                <h1 className='w-[20%] text-primaryColor font-medium'>Weight</h1>
                                :
                                <p >65 kg</p>

                            </div>
                            <div className='flex gap-2 line-clamp-1'>
                                <h1 className='w-[20%] text-primaryColor font-medium'>Gender</h1>
                                :
                                <p >{appointment.patient.gender}</p>

                            </div>
                        </div>
                    </div>
                    {/* General Instructions */}
                    <div>
                        <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>General Instructions</h1>

                        <div className='flex flex-col gap-2 px-2 md:px-4 text-gray-400 w-full mt-4 text-xs md:text-sm lg:text-lg xl:text-xl'>
                            {appointment.treatment.instructions!.map((insturct) => (
                                <div className='flex gap-2 line-clamp-1' key={insturct}>
                                    <div className='h-6 w-6 text-primaryColor'><CircleCheckIcon size={20} /></div>
                                    <p>{insturct}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <DialogFooter >
                    <DialogClose asChild>
                        <div className='w-full flex bg-primaryColor h-12 rounded-lg items-center justify-center cursor-pointer text-white text-center font-semibold'>
                            {getExactRemainingTime(appointment.appointment_date, appointment.appointment_time, appointment.status)}

                        </div>
                    </DialogClose>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}

export default AppointmentDetailsDailog;