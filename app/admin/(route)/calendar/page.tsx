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

registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVJ+WmFZfVtgfF9HaVZVQWYuP1ZhSXxWdkdiWH9WcX1RQ2BdVkI=");

const BlockEvents = () => {
    const data = extend([], dataSource, true);
    const employeeData = [
        { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Content writer' },
        { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Designer' },
        { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Software Engineer' },
        { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Support Engineer' },
        { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Human Resource' },
        { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Content Analyst' }
    ];

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

    return (
        <div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper drag-sample-wrapper'>
                    <div className="schedule-container">
                        <ScheduleComponent
                            cssClass='block-events'
                            width='100%'
                            height='650px'
                            selectedDate={new Date()}
                            currentView='TimelineDay'
                            resourceHeaderTemplate={resourceHeaderTemplate}
                            eventSettings={{ dataSource: data }}
                            group={{ enableCompactView: false, resources: ['Employee'] }}
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