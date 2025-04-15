import React from 'react';
import { TERipple } from 'tw-elements-react';
import CustomInput from './CustomInput';
import { Search01Icon } from 'hugeicons-react';

export default function SearchBar({ hint }: { hint: string }) {
    return (
        <div className="md:w-1/3">
            <div className="relative flex w-full flex-wrap items-stretch">
                <div className="relative">
                    <span className="absolute left-4 top-3"><Search01Icon /></span>
                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"


                        placeholder="search ..."

                    />
                </div>

                {/* <!--Search button--> */}
                <TERipple color='light'>
                    <button
                        className="relative z-[2] flex items-center rounded-r bg-blue-100 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg"
                        type="button"
                        id="button-addon1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </TERipple>
            </div>
        </div>
    );
}