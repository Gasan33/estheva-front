"use client";
import React, { useState } from "react";
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
import AppointmentFailed from "./BookAppointmentSteps/AppointmentFailed";
import { toast } from "@/hooks/use-toast";
import AuthForm from "@/components/forms/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth";
import { signInSchema } from "@/lib/validations";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import config from "@/lib/config";
const stripePromise = loadStripe(config.env.stripPK);

const BookAppointment = ({ treatment, triger }: { treatment: Treatment; triger?: string }) => {
    const session = useSession();
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>();
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
    const [appointmentId, setAppointmentId] = useState<number>(-1);
    const [loading, setLoading] = useState(false);
    const [appointmentSuccess, setAppointmentSuccess] = useState(false);
    const steps = ["Schdule", "Summary", "Payment", "Finish"];
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
        if (!date || !selectedTimeSlot || !selectedDoctor) {
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

            if (!response.ok) {
                setAppointmentSuccess(false);
                // throw new Error(result.error || "Failed to create appointment")
            } else {
                setAppointmentId(result.data.id);
                // setAppointmentSuccess(true);

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
            {triger == "profile" ? (
                <DialogTrigger className="block relative bg-primaryColor rounded-md w-full py-2 text-sm text-white font-thin">
                    Book Again
                </DialogTrigger>
            ) : triger == "home" ? (
                <DialogTrigger className="flex items-center gap-0 md:gap-1 text-xs font-thin md:text-sm md:font-medium text-primaryColor">
                    Book Now
                    <ArrowRight size={16} className="h-4 md:h-6 -rotate-45" />
                </DialogTrigger>
            ) : triger == "online" ? (
                <DialogTrigger className="mt-4 w-full bg-primary uppercase font-thin py-2 rounded-sm text-white">
                    Make AN Appointment
                    {/* <ArrowRight size={16} className="h-4 md:h-6 -rotate-45" /> */}
                </DialogTrigger>
            ) : (
                <DialogTrigger className="w-full">
                    <div className="flex lg:mt-8 mt-4 justify-center py-3 px-4 w-full items-center font-semibold rounded-full text-white bg-primaryColor shadow-lg hover:bg-gray-100">
                        Schedule Treatment
                        <ArrowRight01Icon size={24} className="text-white" />
                    </div>
                </DialogTrigger>
            )}

            {!session.data?.user && currentStep > 1 ?
                <DialogContent>
                    <DialogTitle className='text-center'>Sign In Or Register Please</DialogTitle>


                    <AuthForm
                        type="SIGN_IN"
                        schema={signInSchema}
                        defaultValues={{
                            email: '',
                            password: "",
                        }}
                        triger="BOOK"
                        onSubmit={signInWithCredentials}
                    />
                </DialogContent>
                : <DialogContent>
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
                        <Summary treatment={treatment} timeSlot={selectedTimeSlot!} />
                    ) : currentStep === 3 ? (
                        <Elements stripe={stripePromise}>
                            <PaymentPage setCurrentStep={setCurrentStep} price={Number(treatment.price)} appointmentId={appointmentId} loading={loading} setAppointmentSuccess={setAppointmentSuccess} setLoading={setLoading} />
                        </Elements>
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

                        {currentStep < steps.length ? (
                            currentStep === 3 ?
                                <></>
                                : <Button
                                    className="btn bg-primaryColor text-white"
                                    disabled={currentStep === 1 ? !(date && selectedTimeSlot && selectedDoctor) : false}
                                    type="submit"
                                    onClick={async () => {
                                        if (currentStep === 2) {

                                            const success = await handleAppointmentSubmit();


                                            if (success) {
                                                setCurrentStep((prev) => prev + 1);
                                            }
                                        } else {
                                            setCurrentStep((prev) => prev + 1);
                                        }
                                    }}
                                >
                                    {currentStep === 2 ? (loading ? "loading..." : "Confirm") : "Next"}
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
                </DialogContent>}
        </Dialog>
    );
};

export default BookAppointment;
