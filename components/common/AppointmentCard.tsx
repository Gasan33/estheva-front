"use client";
import CancelAppointmentDailog from '../dialogs/CancelAppointmentDailog';
import RescheduleAppointmentDailog from '../dialogs/RescheduleAppointmentDailog';
import ReviewDailog from '../dialogs/ReviewDailog';
import BookAppointment from './BookAppointment/BookAppointment';
import AppointmentDetailsDailog from '../dialogs/AppointmentDetailsDailog';


const AppointmentCard = ({ item, type }: { item: Treatment, type?: string }) => {

    return (
        <div
            className={`shadow-md rounded-[16px] cursor-pointer ${type === 'canceled' ? 'h-48 pb-0' : 'h-56 pb-2'
                }`}
        >
            <AppointmentDetailsDailog item={item} type={type} />

            <div className="flex gap-4 w-full items-center px-2 mt-2">
                {type === 'canceled' ? (
                    <></>
                ) : type === 'completed' ? (
                    <>
                        <ReviewDailog />
                        <BookAppointment treatment={item} triger="profile" />
                    </>
                ) : (
                    <>
                        <CancelAppointmentDailog />
                        <RescheduleAppointmentDailog />
                    </>
                )}
            </div>
        </div>
    );
};

export default AppointmentCard;
