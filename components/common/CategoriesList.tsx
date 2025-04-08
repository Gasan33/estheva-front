import { useState } from "react";
import Image from "next/image";
import AddNewCategoryDailog from "../dialogs/AddNewCategory";
import config from "@/lib/config";
interface CategoryListProps {
    categories: Category[];
    setTreatments: React.Dispatch<React.SetStateAction<Treatment[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const CategoryList: React.FC<CategoryListProps> = ({ categories, setTreatments, setLoading }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const fetchTreatmentsByCategory = async (category_id: number) => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/treatments/search/${category_id}`);
            const data = await response.json();
            setTreatments(data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching treatments:", error);
        }
    };
    return (
        <div className="gap-2 flex flex-col">
            {categories.map((category) => (
                <div key={category.category_id} onClick={() => {
                    fetchTreatmentsByCategory(category.category_id)
                    setSelectedCategory(category)
                }}>
                    <div
                        className={`p-2 flex gap-2 text-[14px] text-primary rounded-md cursor-pointer items-center w-full hover:bg-gray-50 ${selectedCategory?.category_id === category.category_id ? "bg-gray-50 " : ""
                            }`}
                    >
                        <Image src={category.relations?.images?.attributes?.path ?? "/icons/logo.svg"} alt="icon" width={32} height={32} style={{ height: "auto" }} />
                        <h1>{category.category_name}</h1>
                    </div>
                </div>
            ))}

            < AddNewCategoryDailog />
        </div>
    );
};

export default CategoryList;
