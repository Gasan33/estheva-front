"use client"
import React, { JSX, useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { ArrowRight01Icon, Location01Icon, Time01Icon } from 'hugeicons-react'
import { Calendar } from "@/components/ui/calendar"
import { ArrowRight, CalendarDays, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import BookAppintmentAddress from './BookAppintmentAddress'
import { TiTick } from "react-icons/ti";
import SchduleAppointment from './BookAppointment/SchduleAppointment'
import CheckoutForm from './BookAppointment/Payment'
import ApplePayButton from './BookAppointment/AppleBay'



const BookAppointment = ({ treatment, triger }: { treatment: Treatment, triger?: string }) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
    const steps = ["Schdule", "Payment", "Summary", "Finish"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);



    return (
        <Dialog>
            {triger == "profile" ? <DialogTrigger className='block relative  bg-teal-500 rounded-md w-full py-2 text-sm text-white font-thin'>Book Again</DialogTrigger>
                : triger == "home"
                    ? <DialogTrigger className='flex gap-1 font-medium items-center text-teal-500'>
                        Book Now
                        <ArrowRight size={16} className='-rotate-45' />
                    </DialogTrigger>
                    : <DialogTrigger className='w-full' >

                        <div className='flex lg:mt-8 mt-4 justify-center py-3 px-4 w-full items-center font-semibold rounded-full text-white bg-teal-500 shadow-lg hover:bg-gray-100'>
                            Schdule Appointment
                            <ArrowRight01Icon size={24} className='text-white' />
                        </div>  </DialogTrigger>}



            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Schdule Appointment</DialogTitle>
                </DialogHeader>
                <>
                    <div className="flex justify-between">
                        {steps?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                                    } `}
                            >
                                <div className="step">
                                    {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                                </div>
                                <p className="text-gray-500 text-[8px]">{step}</p>
                            </div>
                        ))}
                    </div>
                    {/* {!complete && (
                        <button
                            className="btn"
                            onClick={() => {
                                currentStep === steps.length
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                            }}
                        >
                            {currentStep === steps.length ? "Finish" : "Next"}
                        </button>
                    )} */}
                </>

                {currentStep == 1 ? <SchduleAppointment
                    date={date}
                    setDate={setDate}
                    selectedTimeSlot={selectedTimeSlot}
                    setSelectedTimeSlot={setSelectedTimeSlot}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    selectedDoctor={selectedDoctor}
                    setSelectedDoctor={setSelectedDoctor}
                    treatment={treatment}
                /> : currentStep == 2
                    ? <div>
                        <ApplePayButton />
                        <CheckoutForm />
                    </div> : <div></div>}
                <DialogFooter className="sm:justify-end gap-4">
                    {currentStep != 1 ? (
                        <Button
                            className="btn text-red-600"
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                setCurrentStep((prev) => prev - 1);
                            }}
                        >
                            Back
                        </Button>
                    ) : <DialogClose asChild>
                        <Button
                            className="btn text-red-600"
                            type="button"
                            variant="secondary"
                        >
                            Close
                        </Button>
                    </DialogClose>
                    }


                    {!complete && (
                        <Button
                            className="btn bg-teal-500 text-white"
                            disabled={currentStep == 1 ? !(date && selectedTimeSlot && selectedDoctor && selectedLocation) : false}
                            onClick={() => {
                                currentStep === steps.length
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);
                            }}
                        >
                            {currentStep === steps.length ? "Finish" : "Next"}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default BookAppointment;


