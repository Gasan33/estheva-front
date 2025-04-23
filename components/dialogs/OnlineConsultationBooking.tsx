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
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import AppointmentSuccess from "../common/BookAppointment/BookAppointmentSteps/AppointmentSuccess";
import AppointmentFailed from "../common/BookAppointment/BookAppointmentSteps/AppointmentFailed";
import ScheduleOnlineConsultationAppointment from "../common/SchduleOnlineConsultationAppointment";

const OnlineConsultationBooking = ({ doctor }: { doctor: Doctor; }) => {
    const session = useSession();
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>();
    const [loading, setLoading] = useState(false);
    const [appointmentSuccess, setAppointmentSuccess] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const resetState = () => {
        setDate(new Date());
        setSelectedTimeSlot(undefined);
    };

    // Function to create a new appointment
    const handleAppointmentSubmit = async (): Promise<boolean> => {
        if (!date || !selectedTimeSlot) {
            toast({ title: "Please fill in all the required fields." });
            return false;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/appointments/store", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: Number(session.data?.user.id),
                    doctor_id: doctor.id,
                    treatment_id: 39,
                    time_slot_id: selectedTimeSlot.id,
                    appointment_date: format(date, "yyyy-MM-dd"),
                    appointment_time: selectedTimeSlot.start_time.slice(0, 5),
                    status: "upcoming",
                    location: "online"
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                setAppointmentSuccess(false);
                // throw new Error(result.error || "Failed to create appointment")
            } else {
                setAppointmentSuccess(true);

                // alert("Appointment booked successfully!");
            };



            return true; // ✅ Return true if successful
        } catch (error: any) {
            toast({ title: error.message || "Something went wrong" });
            return false; // ✅ Return false on failure
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>

            <DialogTrigger className="mt-4 w-full bg-primary uppercase font-thin py-2 rounded-sm text-white">
                Make AN Appointment
                {/* <ArrowRight size={16} className="h-4 md:h-6 -rotate-45" /> */}
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Schdule Appointment</DialogTitle>
                </DialogHeader>


                {currentStep === 1 ? (
                    <ScheduleOnlineConsultationAppointment
                        date={date}
                        setDate={setDate}
                        selectedTimeSlot={selectedTimeSlot}
                        setSelectedTimeSlot={setSelectedTimeSlot}
                        doctorId={doctor.id}

                    />
                ) : (
                    appointmentSuccess ? <AppointmentSuccess /> : <AppointmentFailed />
                )}

                <DialogFooter className="sm:justify-end gap-4">
                    {currentStep > 2 ? <></> :
                        currentStep !== 1 ? (
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

                    {
                        currentStep === 1 ?
                            (<Button
                                className="btn bg-primaryColor text-white"
                                disabled={currentStep === 1 ? !(date && selectedTimeSlot) : false}
                                type="submit"
                                onClick={async () => {
                                    if (currentStep === 1) {

                                        const success = await handleAppointmentSubmit();


                                        if (success) {
                                            setCurrentStep((prev) => prev + 1);
                                        }
                                    } else {
                                        setCurrentStep((prev) => prev + 1);
                                    }
                                }}
                            >
                                {(loading ? "loading..." : "Confirm")}
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

export default OnlineConsultationBooking;
