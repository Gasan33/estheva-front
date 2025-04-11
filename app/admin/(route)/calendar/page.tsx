'use client';
import {
    ScheduleComponent,
    ViewsDirective,
    ViewDirective,
    ResourcesDirective,
    ResourceDirective,
    Inject,
    Resize,
    DragAndDrop,
    Day,
    TimelineViews,
    TimelineMonth,
} from '@syncfusion/ej2-react-schedule';
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import { extend, L10n, registerLicense } from '@syncfusion/ej2-base';
import { useEffect, useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDuration, formatTimeWithAMPM, getInitials, getRandomColor } from '@/lib/utils';
import { CatalogueIcon, Doctor01Icon, UserIcon } from 'hugeicons-react';

registerLicense("Mzc0NTM1OEAzMjM4MmUzMDJlMzBKT3lhd1dEMnpqTXBxd2MwMW83NDZvMTkyTzRmUzMwOVlXK1dGZng2bUJFPQ==");

L10n.load({
    'en-US': {
        schedule: {
            edit: 'Edit',
            delete: 'Delete'
        }
    }
});
const BlockEvents = () => {
    const [doctors, setDoctors] = useState<object[]>([]);
    const [appointmentData, setAppointmentData] = useState<TimeLineEvent | any>();
    const [employeeData, setEmployeeData] = useState<object[]>([]);
    const [loading, setLoading] = useState(true);
    const scheduleObj = useRef<ScheduleComponent | null>(null);

    const fetchAppointments = async () => {
        try {
            const response = await fetch(`/api/admin/appointments`);
            const data = await response.json();
            const appointments: TimeLineEvent = data.data.map((appointment: Appointment) => {
                const startTime = new Date(
                    Number(appointment.appointment_date.split("-")[0]),
                    Number(appointment.appointment_date.split("-")[1]) - 1,
                    Number(appointment.appointment_date.split("-")[2]),
                    Number(appointment.appointment_time.split(":")[0]),
                    Number(appointment.appointment_time.split(":")[1]),
                    0
                );
                const endTime = new Date(startTime);
                endTime.setMinutes(endTime.getMinutes() + appointment.treatment.duration);
                return {
                    Id: appointment.id,
                    Subject: appointment.treatment.title,
                    StartTime: startTime,
                    EndTime: endTime,
                    IsAllDay: false,
                    IsBlock: false,
                    EmployeeId: appointment.doctor.id,
                    appointment: appointment,

                };
            });

            setAppointmentData(extend([], appointments, true));
            setLoading(false);
        } catch (error) {
            // console.error("Error fetching appointments:", error);
            setLoading(false);
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await fetch(`/api/admin/doctors`);
            const data = await response.json();
            const doctors = data.data.map((doctor: any, index: number) => ({
                Id: doctor.id,
                Text: `${doctor.user.first_name} ${doctor.user.last_name}`,
                GroupId: index % 2 === 1 ? 1 : 2,
                Color: getRandomColor(),
                Designation: doctor.specialty,
            }));

            setEmployeeData(doctors);
        } catch (error) {
            // console.error("Error fetching doctors:", error);
        }
    };
    useEffect(() => {
        fetchAppointments();
        fetchDoctors();
    }, []);


    const eventTemplate = (props: TimeLineEvent) => {
        return (
            <div className="p-2 rounded-lg gap-1 flex flex-col">
                <div>{formatTimeWithAMPM(new Date(props.StartTime).toTimeString().slice(0, 5))} - {formatTimeWithAMPM(new Date(props.EndTime).toTimeString().slice(0, 5))}</div>
                <p className='flex gap-1 items-center'><UserIcon size={12} /> {props.appointment.patient.name}</p>
                <p className='flex gap-1 items-center'><CatalogueIcon size={12} /> {props.appointment.treatment.title}</p>
                <p className='flex gap-1 items-center'><Doctor01Icon size={12} /> {props.appointment.doctor.user.name}</p>
            </div>
        );
    };






    if (loading) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-full">
                <ClipLoader size={50} color="#3498db" loading={loading} />
            </div>
        );
    }


    const getEmployeeName = (value: { resourceData: { [x: string]: any; }; resource: { textField: string | number; }; }) => {
        return value.resourceData[value.resource.textField];
    };
    const getEmployeeImage = (value: any) => {
        return getEmployeeName(value).toLowerCase();
    };
    const getEmployeeDesignation = (value: { resourceData: { Designation: any; }; }) => {
        return value.resourceData.Designation;
    };
    const resourceHeaderTemplate = (props: any) => {
        return (<div className="template-wrap">
            <div className="employee-category">
                <div className={"employee-image " + getEmployeeImage(props)} />
                <div className="employee-name"> {getEmployeeName(props)}</div>
                <div className="employee-designation">{getEmployeeDesignation(props)}</div>
            </div>
        </div>);
    };

    return (
        <div className="schedule-control-section">
            <div className="col-lg-12 control-section">
                <div className="control-wrapper drag-sample-wrapper">
                    <div className="schedule-container">
                        <ScheduleComponent
                            cssClass="block-events"
                            ref={scheduleObj}
                            width="100%"
                            height="100%"
                            selectedDate={new Date()}
                            currentView="Day"
                            resourceHeaderTemplate={resourceHeaderTemplate}
                            eventSettings={{ dataSource: appointmentData, template: eventTemplate }}
                            group={{ enableCompactView: false, resources: ["Employee"] }}
                            workDays={[1, 2, 3, 4, 5, 6]}
                            timeScale={{ interval: 60, slotCount: 4 }}
                            startHour="09:00"
                            endHour="21:00"
                            workHours={{ start: "09:00", end: "21:00" }}
                            quickInfoTemplates={{
                                header: (props: TimeLineEvent) => {
                                    const startTime = props?.StartTime ? new Date(props.StartTime) : null;
                                    const endTime = props?.EndTime ? new Date(props.EndTime) : null;
                                    return (
                                        <div className="px-6 py-2 text-white font-bold text-lg flex justify-between">
                                            <div>
                                                {startTime && endTime
                                                    ? `${formatTimeWithAMPM(
                                                        startTime.toTimeString().slice(0, 5)
                                                    )} - ${formatTimeWithAMPM(endTime.toTimeString().slice(0, 5))}`
                                                    : "Time Not Available"}
                                            </div>
                                            <div className="font-thin text-sm">
                                                {props?.appointment?.status ?? "No Status"}
                                            </div>
                                        </div>
                                    );
                                },
                                content: (props: TimeLineEvent) => {
                                    const patient = props?.appointment?.patient ?? {};
                                    const treatment = props?.appointment?.treatment ?? {};
                                    const doctorUser = props?.appointment?.doctor?.user ?? {};

                                    return (
                                        <div className="py-4">
                                            <div className="h-20 w-full flex gap-2 py-2">
                                                <Avatar className="w-16 h-full">
                                                    <AvatarImage
                                                        src={patient?.profile_picture ?? "/images/noavatar.png"}
                                                        alt={patient?.first_name ?? "Unknown"}
                                                        className="object-cover"
                                                    />
                                                    <AvatarFallback className="bg-amber-100">
                                                        {getInitials(patient?.name ?? "GU")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col justify-center py-2">
                                                    <h1 className="text-lg font-thin">{patient?.name ?? "No Name"}</h1>
                                                    <h1 className="text-sm text-gray-500">
                                                        {patient?.phone_number ?? "No Phone Number"}
                                                    </h1>
                                                </div>
                                            </div>

                                            <div className="w-full flex gap-2 py-2 font-normal text-[16px]">
                                                <div className="flex-1">
                                                    <h1 className="line-clamp-1">{treatment?.title ?? "No Treatment"}</h1>
                                                    <p className="text-xs text-gray-500 font-thin">
                                                        {doctorUser?.name ?? "Unknown Doctor"} •{" "}
                                                        {formatDuration(treatment?.duration ?? 0)}
                                                    </p>
                                                </div>
                                                <div className="">
                                                    AED {treatment?.price ?? "0"}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                },
                                footer: (props: TimeLineEvent) => (
                                    <div className="quick-popup-footer">
                                        <button className="edit-btn" onClick={() => alert("Edit Event")}>
                                            Edit
                                        </button>
                                        <button className="delete-btn" onClick={() => alert("Delete Event")}>
                                            Delete
                                        </button>
                                    </div>
                                ),
                            }}
                        >
                            <ResourcesDirective>
                                <ResourceDirective
                                    field="EmployeeId"
                                    title="Employees"
                                    name="Employee"
                                    allowMultiple={true}
                                    dataSource={employeeData}
                                    textField="Text"
                                    idField="Id"
                                    colorField="Color"
                                />
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option="Day" />
                                <ViewDirective option="TimelineDay" />
                                <ViewDirective option="TimelineMonth" />
                            </ViewsDirective>
                            <Inject services={[Day, TimelineViews, TimelineMonth, Resize, DragAndDrop]} />
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlockEvents;