"use client"
import { RiCurrencyLine, RiServiceLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { ClipLoader } from "react-spinners";
import CustomInput from "@/components/common/CustomInput";
import { Edit01Icon } from "hugeicons-react";
import Link from "next/link";

const UpdateFaqs = () => {
    const router = useRouter();
    const pathName = usePathname();
    const id = pathName.split('/').pop();
    const [faqsTitle, setFaqsTitle] = useState<string | null>(null);
    const [faqsAnswer, setFaqsAnswer] = useState<string | null>(null);
    const [faqsDescription, setFaqsDescription] = useState<string>();
    const [active, setActive] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!faqsTitle || !faqsAnswer) {
            toast({ title: "Please fill in all the required fields." });
            return;
        }
        try {
            const response = await fetch(`/api/admin/faqs/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: faqsTitle,
                    answer: faqsAnswer,
                    content: faqsDescription,
                    is_active: active
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to Updated FAQ");

            toast({ title: "FAQS Updated successfully!" });

            router.back();
            return true;
        } catch (error: any) {
            toast({ title: error.message || "Something went wrong" });
            return false;
        } finally {
            setLoading(false);
        }
    };

    const getFaqDetails = async () => {

        try {
            const response = await fetch(`/api/admin/faqs/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch faq");
            }
            const faq: FAQ = await response.json();
            console.log(faq)
            setFaqsTitle(faq.title);
            setFaqsAnswer(faq.answer);
            setFaqsDescription(faq.content);
            setActive(Boolean(faq.is_active));

        } catch (error: any) {
            // setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFaqDetails();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-full" >
                <ClipLoader size={50} color="#3498db" loading={loading} />
            </div>
        );
    }

    return (
        <div className="mx-auto p-4 bg-gray-200" >
            <div className="mx-auto max-w-270" >
                <div className="grid grid-cols-5 gap-8" >
                    <div className="col-span-5 xl:col-span-3" >
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" >
                            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark" >
                                <h3 className="font-semibold text-black dark:text-white" >
                                    Add New FAQ
                                </h3>
                            </div>
                            < div className="p-7" >
                                <form action="#" onSubmit={handleSubmit} >
                                    <CustomInput
                                        label="FAQs Question title"
                                        name="faqsTitle"
                                        type="text"
                                        placeholder="Enter Name..."
                                        value={faqsTitle ?? ""}
                                        icon={< RiServiceLine className="text-gray-500" />}
                                        onChange={(e) => setFaqsTitle(e.target.value)}
                                    />
                                    < div className="mb-6 flex flex-col gap-4 sm:flex-row" >

                                        {/* <ServiceCategorySelect
                                            categoriesData={categoriesData}
                                            setCategoriesData={setCategoriesData}
                                            setLoading={setLoading}
                                            setTreatmentCategory={setTreatmentCategory}
                                        /> */}

                                        < div className="w-full sm:w-1/2" >

                                            <CustomInput
                                                label="FAQs Awnser"
                                                type="text"
                                                name="faqsAwnser"
                                                placeholder="Enter faqs awnser..."
                                                value={faqsAnswer?.toString() || ""}
                                                icon={< RiCurrencyLine className="text-gray-500" />}
                                                onChange={(e) => setFaqsAnswer(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    < div className="mb-6" >
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="Username"
                                        >
                                            FAQs Description
                                        </label>
                                        < div className="relative" >
                                            <span className="absolute left-4 top-4" >
                                                <Edit01Icon />
                                            </span>

                                            < textarea
                                                className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                name="faqs"
                                                id="serviceDesc"
                                                rows={6}
                                                value={faqsDescription ? faqsDescription : ""}
                                                placeholder="Write Service Description over here..."
                                                onChange={(e) => setFaqsDescription(e.target.value)}
                                                required

                                            > </textarea>
                                        </div>
                                    </div>
                                    < div className="flex items-center space-x-2" >
                                        <label>Activated </label>
                                        < Switch
                                            checked={active}
                                            onCheckedChange={setActive}
                                        />
                                    </div>
                                    < div className="flex justify-end gap-4" >
                                        <Link href="/admin/faqs" >
                                            <button
                                                className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                                type="button"
                                            >
                                                Cancel
                                            </button>
                                        </Link>

                                        < button
                                            className="flex text-white bg-blue-500 justify-center rounded px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                                            type="submit"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateFaqs;
