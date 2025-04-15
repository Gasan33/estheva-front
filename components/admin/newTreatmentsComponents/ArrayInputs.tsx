import React, { useState } from 'react';
import { CgRemove } from 'react-icons/cg';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { toast } from '@/hooks/use-toast';

interface TreatmentBenefitsProps {
    label: string;
    name: string;
    placeholder: string;
    elements: string[];
    // handleElementDelete: (item: string) => void;
    setElements: (newElement: string[]) => void; // This function should accept an array of elements
    // setElement: React.Dispatch<React.SetStateAction<string>>; // Handles the input value
}

const TreatmentBenefits: React.FC<TreatmentBenefitsProps> = ({
    label,
    name,
    placeholder,
    elements,
    // handleElementDelete,
    setElements,
    // setElement,
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddElements = () => {
        if (!inputValue.trim()) {
            return;
        }

        if (inputValue.includes('.')) {
            const newElements = inputValue
                .split('.')
                .map((item) => item.trim())
                .filter((item) => item.length > 0);

            const uniqueElements = newElements.filter(
                (item) => !elements.includes(item)
            );

            if (uniqueElements.length === 0) {
                toast({ title: 'No new unique benefits were added.' });
                return;
            }
            setElements([...elements, ...uniqueElements]);
        } else {
            if (elements.includes(inputValue)) {
                toast({ title: 'Item already exists' });
                return;
            }

            setElements([...elements, inputValue]);
        }

        setInputValue('');
    };

    const handleElementDelete = (element: string) => {
        setElements(elements?.filter((item) => item !== element));
    };

    return (
        <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor={name}>
                {label}
            </label>

            {/* Render list of elements */}
            {elements &&
                elements.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center px-2 py-2 font-medium text-lg mb-4 rounded-sm border border-gray-200 bg-gray-100"
                    >
                        {item}
                        <CgRemove onClick={() => handleElementDelete(item)} className="cursor-pointer" />
                    </div>
                ))}

            <div className="flex w-full h-[50px] items-center space-x-2">
                {/* Input for adding new element */}
                <Input
                    type="text"
                    placeholder={placeholder}
                    className="h-[50px]"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button
                    type="button"
                    className="h-[50px] bg-green-600 flex items-center text-white px-4 rounded-sm"
                    onClick={handleAddElements}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};

export default TreatmentBenefits;
