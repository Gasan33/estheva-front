'use client';
import {
    Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop,
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
import { extend, registerLicense } from '@syncfusion/ej2-base';
import { dataSource } from '@/constants';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVJ+WmFZfVtgfF9HaVZVQWYuP1ZhSXxWdkdiWH9WcX1RQ2BdVkI=");

const BlockEvents = () => {
    const [doctors, setDoctors] = useState<object[]>([]);
    const [appointmentData, setAppointmentData] = useState<object>();
    const [employeeData, setEmployeeData] = useState<object[]>([]);
    const [loading, setLoading] = useState(true);
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 12)];
        }
        return color;
    };
    const fetchAppointments = async () => {
        try {
            const response = await fetch(`/api/admin/appointments`);
            const data = await response.json();

            const appointments = data.data.map((appointment: Appointment) => {
                const startTime = new Date(
                    Number(appointment.appointment_date.split("-")[0]),
                    Number(appointment.appointment_date.split("-")[1]) - 1,
                    Number(appointment.appointment_date.split("-")[2]),
                    Number(appointment.appointment_time.split(":")[0]),
                    Number(appointment.appointment_time.split(":")[1]),
                    0
                );


                const endTime = new Date(startTime);
                endTime.setMinutes(endTime.getMinutes() + appointment.treatment.duration); // Properly add minutes

                return {
                    Id: appointment.id,
                    Subject: appointment.treatment.title,
                    StartTime: startTime,
                    EndTime: endTime,
                    IsAllDay: false,
                    IsBlock: false,
                    EmployeeId: appointment.doctor.id
                };
            });

            console.log(appointments)

            setAppointmentData(extend([], appointments, true));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching appointments:", error);
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
            console.error("Error fetching doctors:", error);
        }
    };
    useEffect(() => {


        fetchAppointments();
        fetchDoctors();
    }, []);

    const getEmployeeName = (value: { resourceData: Record<string, any>; resource?: { textField: string } }) => {
        return value.resourceData[value.resource?.textField ?? ""] || "Unknown";
    };

    const getEmployeeImage = (value: { resourceData: Record<string, any>; resource?: { textField: string } }) => {
        return getEmployeeName(value).toLowerCase().replace(/\s/g, "-");
    };

    const getEmployeeDesignation = (value: { resourceData: { Designation?: string } }) => {
        return value.resourceData.Designation || "No Designation";
    };

    const resourceHeaderTemplate = (props: { resourceData: Record<string, any>; resource?: { textField: string } }) => (
        <div className="template-wrap">
            <div className="employee-category">
                <div className={"employee-image " + getEmployeeImage(props)} />
                <div className="employee-name">{getEmployeeName(props)}</div>
                <div className="employee-designation">{getEmployeeDesignation(props)}</div>
            </div>
        </div>
    );


    if (loading) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-full">
                <ClipLoader size={50} color="#3498db" loading={loading} />
            </div>
        );
    }

    return (
        <div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper drag-sample-wrapper'>
                    <div className="schedule-container">
                        <ScheduleComponent
                            cssClass='block-events'
                            width='100%'
                            height='100%'
                            selectedDate={new Date()}
                            currentView='Day'
                            resourceHeaderTemplate={resourceHeaderTemplate}
                            eventSettings={{ dataSource: appointmentData }}
                            group={{ enableCompactView: false, resources: ['Employee'] }}
                            workDays={[1, 2, 3, 4, 5, 6]}
                            timeScale={{ interval: 60, slotCount: 4 }}
                            startHour="09:00"
                            endHour="21:00"
                            workHours={{ start: "09:00", end: "21:00" }}
                        >
                            <ResourcesDirective>
                                <ResourceDirective
                                    field='EmployeeId'
                                    title='Employees'
                                    name='Employee'
                                    allowMultiple={true}
                                    dataSource={employeeData}
                                    textField='Text'
                                    idField='Id'
                                    colorField='Color'
                                />
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='Day' />
                                <ViewDirective option='TimelineDay' />
                                <ViewDirective option='TimelineMonth' />
                            </ViewsDirective>
                            <Inject services={[Day, TimelineViews, TimelineMonth, Resize, DragAndDrop]} />
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockEvents;