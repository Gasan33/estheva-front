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
interface Doctor {
    name: string;
    img: string;
}

interface Treatment {
    id: number;
    name: string;
    desc: string;
    price: string;
    benfits: string[];
    img: string[];
    video?: string;
    instructions?: string[];
    dicount?: string;
    bgColor?: string;
    textColor?: string;
    duration: number;
    rating?: number;
    home_based: number;
    discount_type: "percentage" | "fixed" | null;
    service_sale_tag: string | null;
    category_id: number;
    created_at: string;
    updated_at: string;
    category: Category;
    doctors: Doctor[];
    time_slots: TimeSlot[];
    reviews: Review[];
};
interface Category {
    id: number;
    title: string;
    path: string;
    description: string;
    icon: string;
};

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
    date: string; // Use ISO 8601 format for dates or validate accordingly
    des: string;
    img: string; // URL for the image
}
interface SocialLink {
    path: string;
    icon: JSX.Element;
}

interface QuickLink {
    path: string;
    display: string;
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

interface Review {
    id: number;
    patient_id: number;
    doctor_id: number | null;
    service_id: number;
    rating: number;
    review_text: string;
    created_at: string;
    updated_at: string;
}


interface TreatmentTab {
    id: number;
    title: string;
    value: string;
}
