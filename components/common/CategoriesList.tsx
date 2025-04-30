import { useState } from "react";
import Image from "next/image";
import AddNewCategoryDailog from "../dialogs/AddNewCategory";
import config from "@/lib/config";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
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

    async function handelDelete(id: number): Promise<void> {
        try {
            const response = await fetch(`/api/admin/categories/remove/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete Category`);
            }
            toast({ title: "Category Deleted Successfuly" });
        } catch (error) {
        }
    }
    return (
        <div className="gap-2 flex flex-col">
            {categories.map((category) => (
                <div key={category.category_id} onClick={() => {
                    fetchTreatmentsByCategory(category.category_id)
                    setSelectedCategory(category)
                }}>
                    <div className="flex ">
                        <div
                            className={`p-2 flex gap-2 text-[14px] text-primary rounded-md cursor-pointer items-center w-full hover:bg-gray-50 ${selectedCategory?.category_id === category.category_id ? "bg-gray-50 " : ""
                                }`}
                        >
                            <Image src={category.relations?.images?.attributes?.path ?? "/icons/logo.svg"} alt="icon" style={{ height: "auto", width: "32px" }} width={32} height={32} />
                            <h1>{category.category_name}</h1>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4 text-black" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() => navigator.clipboard.writeText(`${category.category_id}`)}
                                >
                                    Copy Category ID
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <Link href={`/admin/treatments/show/${category.category_id}`}><DropdownMenuItem>View Category details</DropdownMenuItem></Link>
                                <Link href={`/admin/categories/edit/${category.category_id}`}><DropdownMenuItem>Edit Category</DropdownMenuItem></Link>
                                <DropdownMenuItem onClick={() => handelDelete(category.category_id)}>Delete Category</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
            ))}

            < AddNewCategoryDailog />
        </div>
    );
};

export default CategoryList;
