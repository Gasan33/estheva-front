
interface NavLinks {
    id: number,
    path: string,
    name: string,
    dropMenu?: DropMenu[],
}

interface DropMenu {
    id: number,
    path: string,
    name: string,
    value?: string,
}
interface AuthCredentials {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    password: string;
    confirmPassword: string;
}

interface Treatment {
    id: number;
    title: string;
    description: string;
    price: string;
    discounted_price: string;
    images: string[];
    home_based: number;
    video: string;
    duration: number;
    benefits: string[];
    instructions: string[];
    discount_value: string;
    discount_type: string;
    treatment_sale_tag: string | null;
    category: Category;
    doctors: Doctor[];
    reviews: Review[];
    time_slots: TimeSlot[];
    created_at: string;
    updated_at: string;
}

interface Category {
    category_id: number;
    category_name: string;
    category_slug: string;
    category_description: string | null;
    parent_id: number | null;
    relations: {
        images: Images;
    };
}

interface Images {
    id: number;
    type: string;
    attributes: {
        path: string;
    };
}

interface Doctor {
    id: number;
    user_id: number;
    specialty: string;
    certificate: string;
    university: string;
    patients: number;
    exp: number;
    about: string;
    home_based: number;
    availabilities: Availability[];
    user: User;
}

interface Availability {
    id: number;
    doctor_id: number;
    day_of_week: string;
    start_time: string;
    end_time: string;
    created_at: string;
    updated_at: string;
}

interface User {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string | null;
    phone_number: string;
    phone_verified_at: string | null;
    profile_picture: string | null;
    device_token: string | null;
    date_of_birth: string | null;
    gender: string;
    created_at: string;
    updated_at: string;
}


interface TimeLineEvent {
    Id: number,
    Subject: string,
    StartTime: string,
    EndTime: string,
    IsAllDay: boolean,
    IsBlock: boolean,
    EmployeeId: number,
    appointment: Appointment,
}

interface Appointment {
    id: number;
    user_id: number;
    doctor_id: number;
    treatment_id: number;
    appointment_date: string;
    appointment_time: string;
    location: string;
    status: string;
    notes: string;
    created_at: string;
    updated_at: string;
    patient: User;
    doctor: Doctor;
    treatment: Treatment;
}

interface Review {
    id: number;
    patient_id: number;
    doctor_id: number;
    treatment_id: number | null;
    rating: number;
    review_text: string;
    created_at: string;
    updated_at: string;
    patient: User;
    doctor: Doctor | null;
    treatment: Treatment | null;
}


interface Faqs {
    question: string;
    content: string;
}

interface ContactCredentials {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    message: string;
}

interface Article {
    id: number;
    author: string;
    title: string;
    topic: string;
    date: string;
    des: string;
    img: string;
}
interface SocialLink {
    path: string;
    icon: JSX.Element;
}

interface QuickLink {
    path: string;
    display: string;
}

declare module "@ffmpeg/ffmpeg" {
    export const createFFmpeg: any;
    export const fetchFile: any;
}

interface EventData {
    Id: number;
    Subject: string;
    StartTime: Date;
    EndTime: Date;
    IsAllDay: boolean;
    IsBlock?: boolean;
    EmployeeId: number;
}
// interface Treatment {
//     id: number;
//     name: string;
//     description: string;
//     price: string;
//     images: string[];
//     home_based: number;
//     video: string;
//     duration: number;
//     benefits: string[];
//     discount_value: number | null;
//     discount_type: "percentage" | "fixed" | null;
//     service_sale_tag: string | null;
//     category_id: number;
//     created_at: string;
//     updated_at: string;
//     category: Category;
//     doctors: Doctor[];
//     time_slots: TimeSlot[];
//     reviews: Review[];
// }

// interface Category {
//     id: number;
//     name: string;
//     slug: string;
//     description: string;
//     visibility: boolean;
//     parent_id: number | null;
//     created_at: string;
//     updated_at: string;
// }

// interface Doctor {
//     id: number;
//     user_id: number;
//     specialty: string;
//     certificate: string;
//     university: string;
//     patients: number;
//     exp: number;
//     about: string;
//     home_based: number;
//     availability: string | null;
//     created_at: string;
//     updated_at: string;
//     pivot: {
//         service_id: number;
//         doctor_id: number;
//     };
// }

interface TimeSlot {
    id: number;
    doctor_id: number;
    service_id: number;
    date: string;
    start_time: string;
    end_time: string;
    is_available: number;
    created_at: string;
    updated_at: string;
}



interface TreatmentTab {
    id: number;
    title: string;
    value: string;
}



interface Blog {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    content: string;
    image: string;
    user_id: number;
    created_at: string;
    updated_at: string;
}



interface FAQ {
    id: number;
    title: string;
    slug: string;
    answer: string;
    content: string;
    is_active: number;
    order: number;
    created_at: string;
    updated_at: string;
}
