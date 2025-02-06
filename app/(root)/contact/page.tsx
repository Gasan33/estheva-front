"use client";

import React from "react";
import GoogleMapComponent from "@/components/common/GoogleMapComponent";
import ContactForm from "@/components/forms/ContactForm";
import { contactSchema } from "@/lib/validations";
import { handleContactSubmit } from "@/lib/actions/contact";

const Contact = () => {


    return (


        <div className="bg-pattern">
            <GoogleMapComponent />

            <h2 className="font-thin text-2xl md:text-3xl lg:text-4xl px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 text-gray-950 max-w-full md:max-w-[85%] lg:max-w-[70%] leading-6 md:leading-8 lg:leading-[56px]">
                For any enquiries, or to request further information, please fill in the form below.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[75%_25%] gap-4 px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
                {/* Left Section */}
                <div className="py-8 px-6 bg-white border-gray-200 border-[0.5px] rounded-lg">
                    <h2 className="font-thin text-3xl md:text-4xl lg:text-5xl   pb-4 border-b-[1px] mb-8 text-gray-950 leading-6 md:leading-8 lg:leading-[56px]">
                        Get in Touch
                    </h2>
                    <ContactForm
                        type="CONTACT"
                        schema={contactSchema}
                        defaultValues={{
                            firstName: "",
                            lastName: "",
                            phoneNumber: 0,
                            email: "",
                            message: "",
                        }}
                        onSubmit={handleContactSubmit}
                    />
                </div>
                {/* Right Section */}
                <div className="md:pl-6 lg:pl-8">
                    <div className="bg-gray-50 p-4 rounded-md">
                        <div className="pb-4 border-b-[1px] border-gray-300 mb-8">
                            <h1 className="font-thin text-lg md:text-xl lg:text-2xl text-gray-950">
                                Contact Us
                            </h1>
                            <p className="font-thin text-sm mt-2 text-gray-500">
                                Please use the form to contact us.
                            </p>
                        </div>

                        {/* <div className="pb-4 border-b-[1px] border-gray-300 mb-8">
                            <h1 className="font-thin text-lg md:text-xl lg:text-2xl text-gray-950">
                                Contact Us
                            </h1>
                            <p className="font-thin text-sm mt-2 text-gray-500">
                                Please use the form to contact us.
                            </p>
                        </div> */}

                    </div>
                </div>
            </div>



        </div>

    );
};

export default Contact;
