import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { BiCategory } from 'react-icons/bi';
import { Button } from '../ui/button';
import CustomInput from '../common/CustomInput';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select';
import { RiCurrencyLine } from 'react-icons/ri';

const AddTreatmentDiscount = ({ id }: { id: number }) => {
    const router = useRouter();
    const [discountType, setDiscountType] = useState<string>('');
    const [discountValue, setDiscountValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!discountType || !discountValue) {
            toast({ title: "Please fill in all the required fields." });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`/api/admin/treatments/add-discount/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    discount_type: discountType,
                    discount_value: parseFloat(discountValue),
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || "Failed to add discount");

            toast({ title: "Discount added successfully!" });
            router.push("/admin/treatments");
        } catch (error: any) {
            toast({ title: error.message || "Something went wrong" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog >
            <DialogTrigger asChild>
                <span className="w-full flex text-lg items-center gap-2 px-2 py-3 rounded-sm cursor-pointer hover:bg-accent focus:bg-accent focus:text-accent-foreground">
                    Add Treatment Discount
                </span>
            </DialogTrigger>


            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Treatment Discount</DialogTitle>
                    <DialogDescription>
                        Add a discount to the selected treatment.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="p-7 relative">
                    {/* Discount Type */}
                    <div className="mb-6 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full">
                            <label
                                htmlFor="discountType"
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                            >
                                Discount Type
                            </label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4">
                                    <BiCategory />
                                </span>
                                <Select
                                    onValueChange={(value) => setDiscountType(value)}
                                    value={discountType}
                                >
                                    <SelectTrigger className="w-full h-[50px] rounded-sm border-[0.5px] pl-10">
                                        <SelectValue placeholder="Select Discount Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="percentage">Percentage</SelectItem>
                                        <SelectItem value="fixed">Fixed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Discount Value */}

                    <CustomInput
                        label="Discount Value"
                        value={discountValue}
                        type="number"
                        name="discountValue"
                        placeholder="Enter Discount Value..."
                        icon={<RiCurrencyLine className="text-gray-500" />}
                        onChange={(e) => setDiscountValue(e.target.value)}
                    />


                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                        <DialogClose asChild>
                            <Button className="text-red-600" type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex justify-center text-white rounded bg-primary px-6 py-2 font-medium hover:bg-opacity-90"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </DialogContent>


        </Dialog>
    );
};

export default AddTreatmentDiscount;
