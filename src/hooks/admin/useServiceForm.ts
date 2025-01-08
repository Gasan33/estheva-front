// hooks/useServiceForm.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCategoriesData, getDoctorsData, createService } from "../../services/admin/services";

type Category = {
    id: number;
    title: string;
};

type Doctor = {
    id: number;
    title: string;
};

export const useServiceForm = () => {
    const router = useRouter();
    const [serviceName, setServiceName] = useState("");
    const [servicePrice, setServicePrice] = useState(0);
    const [serviceDesc, setServiceDesc] = useState("");
    const [serviceDuration, setServiceDuration] = useState(0);
    const [serviceDoctors, setServiceDoctors] = useState<number[]>([]);
    const [serviceImages, setServiceImages] = useState<string[]>([]);
    const [serviceCategory, setServiceCategory] = useState(0);
    const [serviceVideo, setServiceVideo] = useState("");
    const [ben, setBen] = useState("");
    const [serviceBenefits, setServiceBenefits] = useState<string[]>([]);
    const [categoriesData, setCategoriesData] = useState<Category[]>([]);
    const [doctorsData, setDoctorsData] = useState<Doctor[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const categories = await getCategoriesData();
            setCategoriesData(categories);

            const doctors = await getDoctorsData();
            setDoctorsData(doctors);
        };
        fetchData();
    }, []);

    const addBenefit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setServiceBenefits([...serviceBenefits, ben]);
        setBen("");
    };

    const handleBenefitDelete = (benefit: string) => {
        setServiceBenefits(serviceBenefits.filter((item) => item !== benefit));
    };

    const handleCategorySelect = (value: string) => {
        const category = categoriesData.find((item) => item.title === value);
        if (category) setServiceCategory(category.id);
    };

    const handleDoctorSelect = (value: string) => {
        const doctor = doctorsData.find((item) => item.title === value);
        if (doctor) {
            setServiceDoctors([...serviceDoctors, doctor.id]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!serviceName || !serviceDesc || !servicePrice || !serviceImages.length || !serviceBenefits.length || !serviceVideo || !serviceDuration || !serviceDoctors.length || !serviceCategory) {
            alert("Please fill in all the required fields.");
            return;
        }

        try {
            await createService({
                name: serviceName,
                description: serviceDesc,
                price: servicePrice,
                images: serviceImages,
                video: serviceVideo,
                benefits: serviceBenefits,
                duration: serviceDuration,
                category_id: serviceCategory,
                doctors: serviceDoctors != null ? serviceDoctors : [],
            });
            router.push("/admin/services");
            alert("Service Created Successfully");
        } catch (error) {
            console.error("Error creating service:", error);
            alert("Error creating service.");
        }
    };

    return {
        serviceName,
        setServiceName,
        servicePrice,
        setServicePrice,
        serviceDesc,
        setServiceDesc,
        serviceDuration,
        setServiceDuration,
        serviceDoctors,
        setServiceDoctors,
        serviceImages,
        setServiceImages,
        serviceCategory,
        setServiceCategory,
        serviceVideo,
        setServiceVideo,
        ben,
        setBen,
        serviceBenefits,
        setServiceBenefits,
        categoriesData,
        doctorsData,
        addBenefit,
        handleBenefitDelete,
        handleCategorySelect,
        handleDoctorSelect,
        handleSubmit,
    };
};
