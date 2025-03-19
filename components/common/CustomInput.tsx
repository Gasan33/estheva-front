import React from "react";

interface CustomInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    type: React.HTMLInputTypeAttribute;
    icon: React.ReactNode;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, placeholder, type, value, icon, onChange }) => {
    return (
        <div className="w-full mb-6">
            <label className="mb-3 block text-black dark:text-white" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                <span className="absolute left-4 top-3">{icon}</span>
                <input
                    className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
            </div>
        </div>
    );
};

export default CustomInput;
