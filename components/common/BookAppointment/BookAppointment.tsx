"use client";
import React, { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { ArrowRight01Icon } from "hugeicons-react";
import { ArrowRight } from "lucide-react";
import { TiTick } from "react-icons/ti";
import SchduleAppointment from "./BookAppointmentSteps/SchduleAppointment";
import Summary from "./BookAppointmentSteps/Summary";
import AppointmentSuccess from "./BookAppointmentSteps/AppointmentSuccess";
import PaymentPage from "./BookAppointmentSteps/Payment";
import { useSession } from "next-auth/react";
import { format } from "date-fns";

const BookAppointment = ({ treatment, triger }: { treatment: Treatment; triger?: string }) => {
    const session = useSession();
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>();
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const steps = ["Schdule", "Payment", "Summary", "Finish"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    const resetState = () => {
        setDate(new Date());
        setSelectedTimeSlot(undefined);
        setSelectedLocation(null);
        setSelectedDoctor(null);
        setCurrentStep(1);
        setComplete(false);
    };

    // Function to create a new appointment
    const handleAppointmentSubmit = async (): Promise<boolean> => {
        if (!date || !selectedTimeSlot || !selectedDoctor || !selectedLocation) {
            alert("Please fill all required fields");
            return false;
        }

        setLoading(true);
        console.log(
            `"user_id": ${session.data?.user.id},
            "doctor_id": ${selectedDoctor},
            "treatment_id": ${treatment.id},
            "time_slot_id":${selectedTimeSlot.id}
            "appointment_date": ${format(date, "yyyy-MM-dd")},
            "appointment_time": ${selectedTimeSlot.start_time.slice(0, 5)},
            "status": "upcoming",
            "location":${selectedLocation}`
        )

        try {
            const response = await fetch("/api/appointments", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${session.data?.user.access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: session.data?.user.id,
                    doctor_id: selectedDoctor,
                    treatment_id: treatment.id,
                    time_slot_id: selectedTimeSlot.id,
                    appointment_date: format(date, "yyyy-MM-dd"),
                    appointment_time: selectedTimeSlot.start_time.slice(0, 5),
                    status: "upcoming",
                    location: selectedLocation
                }),
            });

            const result = await response.json();
            console.log(result);

            if (!response.ok) throw new Error(result.error || "Failed to create appointment");

            alert("Appointment booked successfully!");

            return true; // ✅ Return true if successful
        } catch (error: any) {
            alert(error.message || "Something went wrong");
            return false; // ✅ Return false on failure
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            {triger == "profile" ? (
                <DialogTrigger className="block relative bg-primaryColor rounded-md w-full py-2 text-sm text-white font-thin">
                    Book Again
                </DialogTrigger>
            ) : triger == "home" ? (
                <DialogTrigger className="flex items-center gap-0 md:gap-1 text-xs font-thin md:text-sm md:font-medium text-primaryColor">
                    Book Now
                    <ArrowRight size={16} className="h-4 md:h-6 -rotate-45" />
                </DialogTrigger>
            ) : (
                <DialogTrigger className="w-full">
                    <div className="flex lg:mt-8 mt-4 justify-center py-3 px-4 w-full items-center font-semibold rounded-full text-white bg-primaryColor shadow-lg hover:bg-gray-100">
                        Schdule Appointment
                        <ArrowRight01Icon size={24} className="text-white" />
                    </div>
                </DialogTrigger>
            )}

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Schdule Appointment</DialogTitle>
                </DialogHeader>

                <div className="flex justify-between mt-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                                }`}
                        >
                            <div className="step">{i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}</div>
                            <p className="text-gray-500 text-[8px]">{step}</p>
                        </div>
                    ))}
                </div>

                {currentStep === 1 ? (
                    <SchduleAppointment
                        date={date}
                        setDate={setDate}
                        selectedTimeSlot={selectedTimeSlot}
                        setSelectedTimeSlot={setSelectedTimeSlot}
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}
                        selectedDoctor={selectedDoctor}
                        setSelectedDoctor={setSelectedDoctor}
                        treatment={treatment}
                    />
                ) : currentStep === 2 ? (
                    <PaymentPage price={Number(treatment.price)} />
                ) : currentStep === 3 ? (
                    <Summary treatment={treatment} />
                ) : (
                    <AppointmentSuccess />
                )}

                <DialogFooter className="sm:justify-end gap-4">
                    {currentStep !== 1 ? (
                        <Button
                            className="btn text-red-600"
                            type="button"
                            variant="secondary"
                            onClick={() => setCurrentStep((prev) => prev - 1)}
                        >
                            Back
                        </Button>
                    ) : (
                        <DialogClose asChild>
                            <Button className="btn text-red-600" type="button" onClick={resetState} variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    )}

                    {currentStep < steps.length ? (
                        <Button
                            className="btn bg-primaryColor text-white"
                            disabled={currentStep === 1 ? !(date && selectedTimeSlot && selectedDoctor && selectedLocation) : false}
                            onClick={async () => {
                                if (currentStep === 3) {
                                    setLoading(true);
                                    const success = await handleAppointmentSubmit();
                                    setLoading(false);

                                    if (success) {
                                        setCurrentStep((prev) => prev + 1);
                                    }
                                } else {
                                    setCurrentStep((prev) => prev + 1);
                                }
                            }}
                        >
                            {currentStep === 3 ? (loading ? "Booking..." : "Confirm Booking") : "Next"}
                        </Button>
                    ) : (
                        <DialogClose asChild>
                            <Button
                                className="btn bg-primaryColor text-white"
                                onClick={() => {
                                    setComplete(true);
                                    resetState();
                                }}
                            >
                                Finish
                            </Button>
                        </DialogClose>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BookAppointment;
