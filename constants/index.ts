export const navigationLinks: NavLinks[] = [
    // {
    //     id: 1,
    //     path: '/',
    //     name: 'Home',


    // },
    {
        id: 1,
        path: '/',
        name: 'Treatments',
        dropMenu: [
            {
                id: 1,
                path: '/treatments',
                name: 'All Treatments',
                value: 'all',
            },
            {
                id: 2,
                path: '/treatments',
                name: 'Top Rated Treatments',
                value: 'top-rated',
            },
            {
                id: 3,
                path: '/treatments',
                name: 'Pupolar Treatments',
                value: 'pupolar',
            },
            {
                id: 4,
                path: '/treatments',
                name: 'Clinic Treatments',
                value: 'clinic-treatments',
            },
            {
                id: 5,
                path: '/treatments',
                name: 'Home Treatments',
                value: 'home-treatments',
            },

        ]

    },

    {
        id: 2,
        path: '/special-offers',
        name: 'Special Offers',

    },
    {
        id: 3,
        path: '/about',
        name: 'About us',

    },


    {
        id: 4,
        path: '/contact',
        name: 'Contact',

    },
    {
        id: 5,
        path: '/blogs',
        name: 'Blogs',
        // dropMenu: [
        //     {
        //         id: 1,
        //         path: '/blogs/news',
        //         name: 'News',
        //     },
        //     {
        //         id: 2,
        //         path: '/blogs/blogs',
        //         name: 'Blogs',
        //     },
        // ]

    },
    {
        id: 6,
        path: '',
        name: 'More',
        dropMenu: [
            {
                id: 1,
                path: '/faqs',
                name: 'FAQs',
            },
            {
                id: 2,
                path: '/support',
                name: 'Support',
            },
        ]

    },

];


export const quickLinks01: QuickLink[] = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/",
        display: "Blog",
    },
];

export const quickLinks02: QuickLink[] = [
    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path: "/",
        display: "Request an Appointment",
    },
    {
        path: "/",
        display: "Find a Location",
    },
    {
        path: "/",
        display: "Get an Opinion",
    },
];

export const quickLinks03: QuickLink[] = [
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us",
    },
];


export const popularTreatments: Treatment[] = [
    {
        id: 1,
        name: "Fat reduction Injections for Body",
        desc: "Fat reduction injections, offer a non-surgical approach to help you achieve a more sculpted and contoured appearance. These injections are designed to target localized fat deposits in areas like the abdomen, thighs, or love handles, where exercise and diet may not provide the desired results.",
        img: [
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T143045.798.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T143045.798.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T143045.798.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T143045.798.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T143045.798.png",
        ],
        price: "1,300.00 AED",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        dicount: "25",
        bgColor: "rgba(254, 182, 13, .2)",
        textColor: "#FEB60D",
        rating: 4.8,
        doctors: [
            {
                name: "Farhan Ali",
                img: "/images/doc1.jpg"
            }
        ],
        duration: 60,
        home_based: 1,
        discount_type: null,
        service_sale_tag: null,
        category_id: 0,
        created_at: "",
        updated_at: "",
        category: {
            id: 6,
            title: "Daigostics",
            path: "daigostics",
            description: "Our diagnostic tests are designed to accurately assess your health, ensuring timely detection and effective treatment for a wide range of conditions.",
            icon: "/images/physiotherapyIcon.png",
        },

        time_slots: [
            {
                id: 155,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "09:00:00",
                end_time: "10:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 156,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:38:00",
                end_time: "12:16:00",
                is_available: 0,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 157,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "12:16:00",
                end_time: "13:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 158,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:54:00",
                end_time: "15:32:00",
                is_available: 0,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 159,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "15:32:00",
                end_time: "17:10:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 160,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:00:00",
                end_time: "11:38:00",
                is_available: 0,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 161,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "11:38:00",
                end_time: "13:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 162,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:16:00",
                end_time: "14:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 163,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "14:54:00",
                end_time: "16:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            }
        ],
        reviews: [
            {
                id: 23,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service",
                created_at: "2025-01-20T09:24:33.000000Z",
                updated_at: "2025-01-20T09:24:33.000000Z"
            },
            {
                id: 24,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service 2",
                created_at: "2025-01-20T09:24:49.000000Z",
                updated_at: "2025-01-20T09:24:49.000000Z"
            }
        ],
        instructions: [
            "Ensure skin is clean and free of makeup, lotions, or oils.",
            "Avoid blood-thinning medications for at least 48 hours before the procedure.",
            "Stay hydrated before your appointment"
        ]
    },
    {
        id: 2,
        name: "Endermology",
        desc: "Endermology is a cutting-edge technology that uses mechanical rollers and gentle suction to stimulate the skin and underlying tissues. This non-invasive treatment targets problem areas, such as thighs, buttocks, abdomen, and arms, to break down stubborn fat cells, improve circulation, and enhance lymphatic drainage.",
        img: [
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T134623.572.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T134623.572.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T134623.572.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T134623.572.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T134623.572.png",
        ],
        price: "800.00 AED",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],

        bgColor: "rgba(151, 113, 255, .2)",
        textColor: "#9771FF",
        rating: 4.5,
        doctors: [
            {
                name: "Ammar Ahmed",
                img: "/images/doc2.jpg"
            }
        ],
        duration: 20,
        home_based: 0,
        discount_type: null,
        service_sale_tag: null,
        category_id: 0,
        created_at: "",
        updated_at: "",
        category: {
            id: 5,
            title: "Physiotherapy",
            path: "physiotherapy",
            description: "Estheva Polyclinic provides comprehensive physiotherapy services aimed at restoring movement, reducing pain, and improving overall physical well-being.",
            icon: "/images/daigosticsIcon.png",
        },

        time_slots: [
            {
                id: 155,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "09:00:00",
                end_time: "10:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 156,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:38:00",
                end_time: "12:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 157,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "12:16:00",
                end_time: "13:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 158,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:54:00",
                end_time: "15:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 159,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "15:32:00",
                end_time: "17:10:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 160,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:00:00",
                end_time: "11:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 161,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "11:38:00",
                end_time: "13:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 162,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:16:00",
                end_time: "14:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 163,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "14:54:00",
                end_time: "16:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            }
        ],
        reviews: [
            {
                id: 23,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service",
                created_at: "2025-01-20T09:24:33.000000Z",
                updated_at: "2025-01-20T09:24:33.000000Z"
            },
            {
                id: 24,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service 2",
                created_at: "2025-01-20T09:24:49.000000Z",
                updated_at: "2025-01-20T09:24:49.000000Z"
            }
        ],
        instructions: [
            "Ensure skin is clean and free of makeup, lotions, or oils.",
            "Avoid caffeine or any stimulants 24 hours before the procedure.",
            "Drink plenty of water prior to your treatment."
        ]
    },
    {
        id: 3,
        name: "Emerald Lipo Laser",
        desc: "Embark on a transformative journey with Emerald Lipo Laser, a groundbreaking technology redefining the landscape of non-invasive and painless fat tissue dissolution. Say goodbye to stubborn fat through an advanced and innovative approach that sets the standard for effective body contouring.",
        img: [
            "https://erchonia-emea.com/wp-content/uploads/2022/08/Emerald-Laser-for-Fat-Removal-by-Erchonia-9001.jpg",
            "https://erchonia-emea.com/wp-content/uploads/2022/08/Emerald-Laser-for-Fat-Removal-by-Erchonia-9001.jpg",
            "https://erchonia-emea.com/wp-content/uploads/2022/08/Emerald-Laser-for-Fat-Removal-by-Erchonia-9001.jpg",
            "https://erchonia-emea.com/wp-content/uploads/2022/08/Emerald-Laser-for-Fat-Removal-by-Erchonia-9001.jpg",
            "https://erchonia-emea.com/wp-content/uploads/2022/08/Emerald-Laser-for-Fat-Removal-by-Erchonia-9001.jpg",
            "https://erchonia-emea.com/wp-content/uploads/2022/08/Emerald-Laser-for-Fat-Removal-by-Erchonia-9001.jpg",


        ],
        price: "2,200.00 AED",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        dicount: "15",
        bgColor: "rgba(1, 181, 197, .2)",
        textColor: "#01B5C5",
        rating: 4.7,
        doctors: [
            {
                name: "John Matthews",
                img: "/images/doc3.jpg"
            }
        ],
        duration: 0,
        home_based: 1,
        discount_type: null,
        service_sale_tag: null,
        category_id: 0,
        created_at: "",
        updated_at: "",
        category: {
            id: 4,
            title: "IV Drips",
            path: "iv-drips",
            description: "our IV drip treatments are designed to quickly replenish essential nutrients, hydration, and vitamins for optimal health and wellness.",
            icon: "/images/ivDripsIcon.png",
        },

        time_slots: [
            {
                id: 155,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "09:00:00",
                end_time: "10:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 156,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:38:00",
                end_time: "12:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 157,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "12:16:00",
                end_time: "13:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 158,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:54:00",
                end_time: "15:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 159,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "15:32:00",
                end_time: "17:10:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 160,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:00:00",
                end_time: "11:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 161,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "11:38:00",
                end_time: "13:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 162,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:16:00",
                end_time: "14:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 163,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "14:54:00",
                end_time: "16:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            }
        ],
        reviews: [
            {
                id: 23,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service",
                created_at: "2025-01-20T09:24:33.000000Z",
                updated_at: "2025-01-20T09:24:33.000000Z"
            },
            {
                id: 24,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service 2",
                created_at: "2025-01-20T09:24:49.000000Z",
                updated_at: "2025-01-20T09:24:49.000000Z"
            }
        ],
        instructions: [
            "Ensure your skin is free from lotions, oils, or makeup before the treatment.",
            "Avoid caffeine or stimulants at least 24 hours before the session.",
            "Hydrate by drinking plenty of water before and after the treatment."
        ]
    },
    {
        id: 4,
        name: "1D Ultrasound Cavitation Slimming Treatment at Home",
        desc: "Introducing our advanced Ultrasound Cavitation, also known as Non-Invasive Liposuction or Body Contouring Treatment. Experience the power of cutting-edge technology to reduce stubborn fat and achieve a more sculpted physique.",
        img: [
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T130423.625_4ccae156-82a9-46e8-b27c-99b83ec3400a.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T130423.625_4ccae156-82a9-46e8-b27c-99b83ec3400a.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T130423.625_4ccae156-82a9-46e8-b27c-99b83ec3400a.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T130423.625_4ccae156-82a9-46e8-b27c-99b83ec3400a.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T130423.625_4ccae156-82a9-46e8-b27c-99b83ec3400a.png",
        ],
        price: "100.00 AED",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        bgColor: "rgba(1, 181, 197, .2)",
        textColor: "#01B5C5",
        rating: 4.6,
        doctors: [
            {
                name: "John Matthews",
                img: "/images/doc1.jpg"
            }
        ],
        duration: 20,
        home_based: 0,
        discount_type: null,
        service_sale_tag: null,
        category_id: 0,
        created_at: "",
        updated_at: "",
        category: {
            id: 3,
            title: "Dermatology",
            path: "dermatology",
            description: "comprehensive dermatology services to address a wide range of skin concerns.",
            icon: "/images/dermatology.png",
        },

        time_slots: [
            {
                id: 155,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "09:00:00",
                end_time: "10:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 156,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:38:00",
                end_time: "12:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 157,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "12:16:00",
                end_time: "13:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 158,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:54:00",
                end_time: "15:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 159,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "15:32:00",
                end_time: "17:10:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 160,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:00:00",
                end_time: "11:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 161,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "11:38:00",
                end_time: "13:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 162,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:16:00",
                end_time: "14:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 163,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "14:54:00",
                end_time: "16:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            }
        ],
        reviews: [
            {
                id: 23,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service",
                created_at: "2025-01-20T09:24:33.000000Z",
                updated_at: "2025-01-20T09:24:33.000000Z"
            },
            {
                id: 24,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service 2",
                created_at: "2025-01-20T09:24:49.000000Z",
                updated_at: "2025-01-20T09:24:49.000000Z"
            }
        ],
        instructions: [
            "Cleanse the treatment area thoroughly, removing any lotions, oils, or makeup.",
            "Drink plenty of water to hydrate your body before the treatment, as it helps in fat elimination."
        ]
    },
    {
        id: 5,
        name: "Intense Lips Filler - 1 ml Neauvia",
        desc: "Dreaming of plump, luscious lips that radiate confidence and allure? Lip filler treatments are all about strategically injecting dermal fillers to redefine and augment the lips.",
        img: [
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T211653.557.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T211653.557.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T211653.557.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T211653.557.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T211653.557.png",
        ],
        price: "900.00 AED",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        dicount: "10",
        bgColor: "rgba(254, 182, 13, .2)",
        textColor: "#FEB60D",
        rating: 4.7,
        doctors: [
            {
                name: "John Matthews",
                img: "/images/doc2.jpg"
            }
        ],
        duration: 30,
        home_based: 1,
        discount_type: null,
        service_sale_tag: null,
        category_id: 0,
        created_at: "",
        updated_at: "",
        category: {
            id: 1,
            title: "Plastic Surgery",
            path: "plastic-surgery",
            description: "we offer expert plastic surgery services designed to enhance your natural beauty and boost your confidence.",
            icon: "/images/plastic.png",
        },

        time_slots: [
            {
                id: 155,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "09:00:00",
                end_time: "10:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 156,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:38:00",
                end_time: "12:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 157,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "12:16:00",
                end_time: "13:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 158,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:54:00",
                end_time: "15:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 159,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "15:32:00",
                end_time: "17:10:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 160,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:00:00",
                end_time: "11:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 161,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "11:38:00",
                end_time: "13:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 162,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:16:00",
                end_time: "14:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 163,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "14:54:00",
                end_time: "16:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            }
        ],
        reviews: [
            {
                id: 23,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service",
                created_at: "2025-01-20T09:24:33.000000Z",
                updated_at: "2025-01-20T09:24:33.000000Z"
            },
            {
                id: 24,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service 2",
                created_at: "2025-01-20T09:24:49.000000Z",
                updated_at: "2025-01-20T09:24:49.000000Z"
            }
        ],
        instructions: [
            "Avoid taking blood thinners, alcohol, and anti-inflammatory medications for at least 48 hours before the procedure to reduce the risk of bruising and swelling.",
            "Inform the practitioner if you have any history of cold sores or herpes simplex virus, as this can affect the treatment.",
            "Arrive with clean, makeup-free skin on the lip area."
        ]
    },
    {
        id: 6,
        name: "Dermal Filler - Neauvia 1ml",
        desc: "Dermal filler treatments involve the precise artistry of specialized fillers to breathe new life into and redefine various facial regions, including cheeks, jawlines, temples, and beyond.  At Estheva Polyclinic, your welfare and contentment reign supreme. We use FDA-approved, top-tier dermal fillers celebrated for their extraordinary outcomes. Typically, these fillers are comprised of hyaluronic acid, a naturally occurring essence within the body that imbues hydration, volume, and structure to the skin.",
        img: [
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T205354.407.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T205354.407.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T205354.407.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T205354.407.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T205354.407.png",
            "https://estheva-polyclinic.com/cdn/shop/files/Untitleddesign-2024-02-29T205354.407.png",
        ],
        price: "1,800.00 AED",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        bgColor: "rgba(151, 113, 255, .2)",
        textColor: "#9771FF",
        rating: 4.7,
        doctors: [
            {
                name: "John Matthews",
                img: "/images/doc3.jpg"
            }
        ],
        duration: 40,
        home_based: 0,
        discount_type: null,
        service_sale_tag: null,
        category_id: 0,
        created_at: "",
        updated_at: "",
        category: {
            id: 2,
            title: "Slimming",
            path: "slimming",
            description: "Estheva Polyclinic provide effective slimming treatments to help you achieve your ideal body shape.",
            icon: "/images/slimming.png",
        },

        time_slots: [
            {
                id: 155,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "09:00:00",
                end_time: "10:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 156,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:38:00",
                end_time: "12:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 157,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "12:16:00",
                end_time: "13:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 158,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:54:00",
                end_time: "15:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 159,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "15:32:00",
                end_time: "17:10:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 160,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "10:00:00",
                end_time: "11:38:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 161,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "11:38:00",
                end_time: "13:16:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 162,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "13:16:00",
                end_time: "14:54:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            },
            {
                id: 163,
                doctor_id: 1,
                service_id: 32,
                date: "2025-01-09",
                start_time: "14:54:00",
                end_time: "16:32:00",
                is_available: 1,
                created_at: "2025-01-09T12:54:39.000000Z",
                updated_at: "2025-01-09T12:54:39.000000Z"
            }
        ],
        reviews: [
            {
                id: 23,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service",
                created_at: "2025-01-20T09:24:33.000000Z",
                updated_at: "2025-01-20T09:24:33.000000Z"
            },
            {
                id: 24,
                patient_id: 1,
                doctor_id: null,
                service_id: 32,
                rating: 5,
                review_text: "Review for the tested service 2",
                created_at: "2025-01-20T09:24:49.000000Z",
                updated_at: "2025-01-20T09:24:49.000000Z"
            }
        ],
        instructions: [
            "Avoid taking blood thinners, alcohol, and anti-inflammatory medications for at least 48 hours before the procedure to reduce the risk of bruising and swelling.",
            "Inform the practitioner if you have any history of cold sores or herpes simplex virus, as this can affect the treatment.",
            "Arrive with clean, makeup-free skin on the lip area."
        ]
    },
];

export const categories: Category[] = [
    {
        id: 1,
        title: "Plastic Surgery",
        path: "plastic-surgery",
        description: "we offer expert plastic surgery services designed to enhance your natural beauty and boost your confidence.",
        icon: "/images/plastic.png",
    },
    {
        id: 2,
        title: "Slimming",
        path: "slimming",
        description: "Estheva Polyclinic provide effective slimming treatments to help you achieve your ideal body shape.",
        icon: "/images/slimming.png",
    },
    {
        id: 3,
        title: "Dermatology",
        path: "dermatology",
        description: "comprehensive dermatology services to address a wide range of skin concerns.",
        icon: "/images/dermatology.png",
    },
    {
        id: 4,
        title: "IV Drips",
        path: "iv-drips",
        description: "our IV drip treatments are designed to quickly replenish essential nutrients, hydration, and vitamins for optimal health and wellness.",
        icon: "/images/ivDripsIcon.png",
    },
    {
        id: 5,
        title: "Physiotherapy",
        path: "physiotherapy",
        description: "Estheva Polyclinic provides comprehensive physiotherapy services aimed at restoring movement, reducing pain, and improving overall physical well-being.",
        icon: "/images/physiotherapyIcon.png",
    },
    {
        id: 6,
        title: "Daigostics",
        path: "daigostics",
        description: "Our diagnostic tests are designed to accurately assess your health, ensuring timely detection and effective treatment for a wide range of conditions.",
        icon: "/images/daigostics.png",
    },

];

export const profileSideBarList = [
    {
        id: 1,
        title: "My Appointments",
        path: "my-appointments",
    },

    {
        id: 2,
        title: "Favourite",
        path: "favourite",
    },

    {
        id: 3,
        title: "Update Profile",
        path: "update-profile",
    },
    {
        id: 4,
        title: "Update Password",
        path: "update-password",
    },
    {
        id: 5,
        title: "Notifications",
        path: "notifications",
    },
    {
        id: 6,
        title: "Data Privacy",
        path: "privacy",
    },
    {
        id: 7,
        title: "Security",
        path: "security",
    },
];

export const addresses = [
    {
        id: 1,
        title: "Home",
        name: "Mohammed Ali",
        phone: "+971 545 671677",
        address: "Dubai, Alwasl road, build 375.",
    },
    {
        id: 2,
        title: "Home",
        name: "Mohammed Ali",
        phone: "+971 545 671677",
        address: "Dubai, Alwasl road, build 375.",
    },
    {
        id: 3,
        title: "Home",
        name: "Mohammed Ali",
        phone: "+971 545 671677",
        address: "Dubai, Alwasl road, build 375.",
    },
];

export const blogs: Article[] = [
    {

        id: 1,
        author: "ESTHEVA",
        title: "Lymphatic drainage",
        topic: "MASSAGE",
        date: "21/08/2024",
        des: "Lymphatic drainage massage is more than just a relaxing treatment—it's a crucial part of maintaining overall well-being and a healthy body shape. At Estheva Polyclinic, we incorporate lymphatic drainage into our weight loss programs to help the body naturally detoxify and eliminate waste.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_17.png",
    },
    {
        id: 2,
        author: "ESTHEVA",
        title: "IV Drip",
        topic: "BEAUTY",
        date: "15/01/2024",
        des: "IV Drip Therapy has gained significant attention in the wellness industry, especially in the UAE. Backed by recent medical research, IV Drips effectively deliver essential nutrients, antioxidants, and hydration directly into the bloodstream, providing quick and efficient benefits.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/9.png",
    },
    {
        id: 3,
        author: "ESTHEVA",
        title: "Medical Laboratory",
        topic: "HEALTH",
        date: "07/05/2024",
        des: "As we age, it becomes crucial to monitor our health proactively. At Estheva Polyclinic in Dubai, we recommend 10 essential medical laboratory tests everyone over 40 should consider doing once a year to maintain optimal health. These tests help detect potential health issues early and enable timely interventions.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_16.png",
    },
    {
        id: 4,
        author: "ESTHEVA",
        title: "Weight Loss",
        topic: "HEALTH",
        date: "12/12/2023",
        des: "If you're searching for the best weight loss programs in Dubai, Estheva Polyclinic offers personalized solutions tailored to your unique body composition. Our weight loss journey begins with a free consultation to assess your body composition using advanced tools. Understanding your body's fat distribution, muscle mass, and metabolic rate is essential to creating an effective weight loss plan. Based on these results, our expert doctors will design a program that combines non-invasive slimming treatments for optimal fat loss.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_15.png",
    },
]

export const privacy = [
    {
        section: "Estheva Polyclinic and www.estheva-polyclinic.com Privacy Policy",
        date: "Effective Date: 01.10.2023",
        desc: "This Privacy Policy outlines how Estheva Polyclinic and its website, www.estheva-polyclinic.com (\"Website\"), collect, use, disclose, and protect your personal information. By accessing or using the Website, you consent to the practices described in this Privacy Policy.",
        content: [
            {
                title: "Information Collected",
                content: [
                    "We may collect personal information, including but not limited to your name, contact details, medical history, and payment information, to provide medical services and improve your experience on our Website."
                ],
            },
            {
                title: "Use of information",
                content: [
                    "We may use your information for appointment scheduling, payment processing, communication, and to improve our services.",
                    "Your medical information is used solely for healthcare purposes and is kept confidential."
                ],
            },
            {

                title: "Cookies and Analytics",
                content: [
                    "We may use cookies and analytics tools to collect information about your use of our Website to enhance your experience and analyze user behavior.",
                ],
            },
            {
                title: "Third-Party Services",
                content: [
                    "We may use third-party service providers to facilitate Website functionality and payment processing. These providers have their own privacy policies.",

                ]
            },
            {
                title: "Data Security",
                content: [
                    "We employ security measures to protect your information, but no data transmission over the internet is entirely secure.",

                ]
            },
            {
                title: "Information Sharing",
                content: [
                    "We do not sell or rent your personal information to third parties.",
                    "We may share your information with healthcare professionals providing services at Estheva Polyclinic.",

                ]
            },
            {
                title: "Consent",
                content: [
                    "By using our Website, you consent to the collection and use of your information as outlined in this Privacy Policy.",

                ]
            },
            {
                title: "Access and Correction",
                content: [
                    "You may request access to your personal information and request corrections or updates.",

                ]
            },
            {
                title: "Retention",
                content: [
                    "We retain your information for the duration necessary to fulfill the purposes outlined in this Privacy Policy."

                ]
            },

        ]
    },
    {
        section: "Data Collection and Usage for Compliance with Dubai Health Authority Patient's Medical Record",
        date: "",
        desc: "",
        content: [
            {
                title: "Data Collection",
                desc: "Estheva Polyclinic, in accordance with the regulations set forth by the Dubai Health Authority (DHA), will collect the following information from patients for the purpose of maintaining accurate medical records and providing optimal healthcare services:",
                content: [
                    "Emirates ID Number: We will collect your Emirates ID number to verify your identity and ensure compliance with DHA requirements for patient identification.",
                    "Personal Information: We will gather your personal information, including but not limited to your name, date of birth, contact details, and address, to create and maintain your medical record accurately.",
                    "Medical Information: To provide you with appropriate medical care, we will record and update your medical history, treatment records, and diagnostic information as necessary.",
                    "Images of Patient's Before/After Treatment Results: We may capture images of your condition before and after treatment to monitor progress, evaluate treatment effectiveness, and maintain comprehensive medical records.",


                ]
            },
            {
                title: "Data Handling and Discretion",
                desc: "",
                content: [
                    "Confidentiality: Estheva Polyclinic places the highest priority on the confidentiality and security of your data. Your information will be stored securely and will only be accessible to authorized healthcare professionals involved in your care.",
                    "Image Usage: Any images of your before/after treatment results will be kept confidential and solely used for medical purposes, including assessment, research, and documentation within the clinic.",
                    "Non-Disclosure: These images will not be shared on any public or social media channels without your explicit consent. Your privacy and consent are of paramount importance to us.",
                    "Consent Form: In cases where we intend to share your before/after treatment images on social media channels or for any promotional purposes, we will seek your specific consent by providing you with a separate consent form. Sharing such images will only occur if you voluntarily provide consent.",


                ]

            }
        ]
    }

]

export const termsAndConditions = [
    {
        section: "Definitions",
        date: "",
        desc: "",
        content: [
            {
                title: "Clinic",
                content: [
                    "The term \"Clinic\" refers to Estheva Polyclinic, a healthcare facility located at Al Wasl Road 375B, AL Badda, Dubai, United Arab Emirates, specializing in medical, aesthetic, and wellness services."
                ],
            },
            {
                title: "Patient",
                content: [
                    "A \"Patient\" is an individual who seeks medical or wellness services from Estheva Polyclinic, either through in-person visits to the clinic or by booking services online through the clinic's website."
                ],
            },
            {

                title: "Packages",
                content: [
                    "\"Packages\" refer to bundled sets of medical, aesthetic, or wellness treatments or services offered by Estheva Polyclinic. These packages may include various sessions or sessions targeting specific health or cosmetic goals."
                ],
            },
            {
                title: "Treatments",
                content: [
                    "\"Treatments\" encompass the medical procedures, aesthetic enhancements, and wellness therapies provided by Estheva Polyclinic. These treatments are administered by qualified healthcare professionals and may include services such as physiotherapy, dermatology procedures, aesthetic enhancements, and more."

                ]
            },
            {
                title: "Services",
                content: [
                    "\"Services\" encompass the comprehensive range of medical, aesthetic, and wellness offerings provided by Estheva Polyclinic. These services are designed to address patients' healthcare, beauty, and well-being needs and may include individual treatments, packages, consultations, and related activities conducted at the clinic or through the clinic's website."

                ]
            },
        ]
    },
    {
        section: "General Terms and Conditions",
        date: "",
        desc: "",
        content: [
            {
                title: "Working Hours",
                content: [
                    "Clinic working hours are Monday-Sunday 9 am to 9 pm.",
                ]
            },
            {
                title: "Appointment Booking Policy",
                content: [
                    "Patients can schedule appointments by calling reception at 04 330 9084 or through the Fresha Mobile Application.",
                    "Reception booking availability is subject to clinic working hours (Monday-Sunday 9 am to 9 pm).",
                    "Fresha Application scheduling is available 24/7 online. Patients are responsible for obtaining information about the application and installing it on their mobile device to manage appointments.",
                ]

            },
            {
                title: "Late cancellation Policy",
                content: [
                    "Patients are responsible for rescheduling or canceling appointments at least 4 hours prior to the appointment time.",
                    "Late cancellations (less than 4 hours) or \"no - shows\" result in the deduction of the session from the patient's package. This applies to single sessions as well, which will not be refunded in case of late cancellation or \"no-show.\"",
                ]

            },
            {
                title: "Belongings",
                content: [
                    "Estheva Polyclinic is not responsible for any patient belongings left on clinic premises.",
                ]

            },
            {
                title: "Medical Record",
                content: [
                    "Patients must inform Estheva Polyclinic of existing or new medical conditions that may affect treatment.",
                ]

            },
            {
                title: "Liabilities",
                content: [
                    "Persons entering the clinic do so at their own risk.",
                    "Estheva Polyclinic, its employees, or the company do not accept responsibility or liability for any injury, loss, damage, or fatality to any person or their property.",
                    "Any accidents or injuries on clinic premises must be reported to the duty manager immediately.",
                ]

            },
            {
                title: "Vehicles",
                content: [
                    "Vehicles parked near the clinic premises and their contents are the sole responsibility of the patient.",
                ]

            },
            {
                title: "Safety and Hygiene",
                content: [
                    "Estheva Polyclinic maintains strict safety and hygiene standards for patient well-being.",
                ]

            },
            {
                title: "Conduct",
                content: [
                    "Patients are expected to conduct themselves respectfully towards personal etiquette and Estheva Polyclinic’s employees as well as to adhere to clinic policies.",
                ]

            },
            {
                title: "Loss of Property",
                content: [
                    "Estheva Polyclinic is not responsible for the loss of patient property.",
                ]

            },
            {
                title: "Payment Conditions",
                content: [
                    "Payment must be processed in advance to book a treatment appointment.",
                    "Payments for Regular Price Packages and treatments can be canceled and refunded for non-executed sessions.",
                    "Payments will not be canceled or refunded for Discounted Packages.",
                ]

            },
            {
                title: "Refund Policy",
                content: [
                    "Estheva Polyclinic offers two types of packages: Regular Packages of Treatments and Discounted Packages.",
                    "Regular Packages of Treatments are refundable for non-executed sessions. Executed sessions are not refundable.",
                    "Discounted Packages are not refundable, neither for executed nor non-executed sessions.",
                ]

            },
            {
                title: "Results",
                content: [
                    "Results of slimming, aesthetic, physiotherapy, or any other medical treatments at Estheva Polyclinic are not guaranteed.",
                    "Individual biological constitution and medical conditions can affect treatment outcomes.",
                    "While Estheva Polyclinic observes average progress, identical results cannot be guaranteed for every individual.",
                ]

            },
            {
                title: "Jurisdiction",
                content: [
                    "These terms and conditions are governed by the Laws of Dubai and the United Arab Emirates.",
                ]

            },
        ]
    },
    {
        section: "Terms and Conditions for Estheva Polyclinic Online Medical Services Purchase",
        date: "",
        desc: "These terms and conditions (\"Terms\") govern the online purchase of medical services from Estheva Polyclinic (\"Clinic\") through the website www.estheva-polyclinic.com (\"Website\"). By accessing or using the Website and purchasing medical services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website or purchase services from the Clinic.",
        content: [
            {
                title: "Booking and Payment",
                content: [
                    "When booking medical services online, you agree to provide accurate and complete information.",
                    "Payment for services must be made in advance through the Website.",
                ],
            },
            {
                title: "Appointment Confirmation",
                content: [
                    "After payment is processed, you will receive confirmation of your appointment via email and a phone call.",
                    "It is Patient esponsibility to ensure that your contact information is accurate and that they are available to receive a call back from Estheva Polyclinic Customer Service representatiove in order to schedule the purchase appointment. In case the patient is not available to answer a booking confirmation call from Estheva Polyclinic, they are oblidged to call the Estheva Polyclinic directly at their convenient time withing the Clinic’s working hours. Contact number: 04 330 90 84",
                ],
            },
            {

                title: "Cancellation and Refund Policy",
                content: [
                    "Cancellation of appointments must be made within the timeframes specified in Appointment Booking Policy and the Late Cancellation Policy",
                    "Refunds for canceled appointments will be processed according to the Clinic's Refund Policy.",
                ],
            },
            {
                title: "Medical Records",
                content: [
                    "The Patient is responsible for providing accurate medical history and information to the Clinic.",
                    "Any changes in your medical condition must be communicated to the Clinic prior to the appointment.",

                ]
            },
            {
                title: "Liability",
                content: [
                    "The Clinic is not liable for any adverse outcomes or complications resulting from services provided.",
                    "The Patient acknowledge the inherent risks associated with medical procedures."
                ]
            },
            {
                title: "Privacy and Data Security",
                content: [
                    "The Patient personal information will be handled in accordance with the Clinic's privacy policy.",
                ]
            },
            {
                title: "Changes to Services",
                content: [
                    "The Clinic reserves the right to modify, suspend, or discontinue services at its discretion.",
                ]
            },
            {
                title: "Website Use",
                content: [
                    "The Patient agrees not to use the Website for any unlawful or unauthorized purposes.",
                    "The Clinic is not responsible for any technical issues or interruptions on the Website.",
                ]
            },
            {
                title: "Governing Law",
                content: [
                    "These Terms are governed by and construed in accordance with the laws of Dubai, United Arab Emirates.",
                ]
            },
            {
                title: "Contact Information",
                content: [
                    "For inquiries or assistance, please contact the Clinic's customer support : 04 330 90 84",
                ]
            },
        ]
    },

]

export const faqs = [
    {
        question: "What is your medical care?",
        content:
            "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
        question: "What happens if I need to go a hospital?",
        content:
            "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
        question: "What happens if I need to go a hospital?",
        content:
            "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
        question: "Can I visit your medical office?",
        content:
            "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
    {
        question: "Does you provide urgent care?",
        content:
            "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
    },
];

export const treatmentTabs: TreatmentTab[] = [
    {
        id: 1,
        title: "All",
        value: "all",

    },
    {
        id: 2,
        title: "Top Rated",
        value: "top-rated",

    },
    {
        id: 3,
        title: "Popular",
        value: "popular",

    },
    {
        id: 4,
        title: "Clinic",
        value: "clinic-treatments",

    },
    {
        id: 5,
        title: "Home",
        value: "home-treatments",

    },
]

export const appointmentsTabs: TreatmentTab[] = [
    {
        id: 1,
        title: "All",
        value: "all",

    },
    {
        id: 2,
        title: "Upcoming",
        value: "upcoming",

    },
    {
        id: 3,
        title: "Completed",
        value: "completed",

    },
    {
        id: 4,
        title: "Canceled",
        value: "canceled",

    },
]


export const CONTACT_FIELD_NAMES = {
    firstName: "First Name *",
    lastName: "Last Name *",
    phoneNumber: "Phone Number *",
    email: "E-mail Address *",
    message: "Message *",
};

export const CONTACT_FIELD_TYPES = {
    firstName: "text",
    lastName: "text",
    email: "email",
    phoneNumber: "number",
    message: "text",
};


export const darkModeStyle = [
    { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
    {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#4b6878" }],
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#64779e" }],
    },
    {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [{ color: "#334e87" }],
    },
    {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#023e58" }],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#283d6a" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6f9ba5" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1d2c4d" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#304a7d" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#98a5be" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1d2c4d" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#2c6675" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#255763" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#b0d5ce" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#023e58" }],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [{ color: "#98a5be" }],
    },
    {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1d2c4d" }],
    },
    {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [{ color: "#283d6a" }],
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#3a4762" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#0e1626" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#4e6d70" }],
    },
];

export const adminSideBarLinks = [
    {
        img: "/icons/admin/home.svg",
        route: "/admin",
        text: "Home",
    },
    {
        img: "/icons/admin/users.svg",
        route: "/admin/users",
        text: "All Users",
    },
    {
        img: "/icons/admin/book.svg",
        route: "/admin/books",
        text: "All Books",
    },
    {
        img: "/icons/admin/bookmark.svg",
        route: "/admin/borrow-records",
        text: "Borrow Records",
    },
    {
        img: "/icons/admin/user.svg",
        route: "/admin/account-requests",
        text: "Account Requests",
    },
];

export const FIELD_NAMES = {
    fullName: "Full name",
    email: "Email",
    universityId: "University ID Number",
    password: "Password",
    universityCard: "Upload University ID Card",
};


export const FIELD_TYPES = {
    fullName: "text",
    email: "email",
    universityId: "number",
    password: "password",
};

export const sampleBooks = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fantasy / Fiction",
        rating: 4.6,
        totalCopies: 20,
        availableCopies: 10,
        description:
            "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
        coverColor: "#1c1f40",
        coverUrl: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
        isLoanedBook: true,
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help / Productivity",
        rating: 4.9,
        totalCopies: 99,
        availableCopies: 50,
        description:
            "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
        coverColor: "#fffdf6",
        coverUrl: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    },
    {
        id: 3,
        title: "You Don't Know JS: Scope & Closures",
        author: "Kyle Simpson",
        genre: "Computer Science / JavaScript",
        rating: 4.7,
        totalCopies: 9,
        availableCopies: 5,
        description:
            "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
        coverColor: "#f8e036",
        coverUrl:
            "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophy / Adventure",
        rating: 4.5,
        totalCopies: 78,
        availableCopies: 50,
        description:
            "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
        coverColor: "#ed6322",
        coverUrl:
            "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    },
    {
        id: 5,
        title: "Deep Work",
        author: "Cal Newport",
        genre: "Self-Help / Productivity",
        rating: 4.7,
        totalCopies: 23,
        availableCopies: 23,
        description:
            "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
        coverColor: "#ffffff",
        coverUrl: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    },
    {
        id: 6,
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Computer Science / Programming",
        rating: 4.8,
        totalCopies: 56,
        availableCopies: 56,
        description:
            "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
        coverColor: "#080c0d",
        coverUrl:
            "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    },
    {
        id: 7,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        genre: "Computer Science / Programming",
        rating: 4.8,
        totalCopies: 25,
        availableCopies: 3,
        description:
            "A timeless guide for developers to hone their skills and improve their programming practices.",
        coverColor: "#100f15",
        coverUrl:
            "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "A timeless guide for developers to hone their skills and improve their programming practices.",
    },
    {
        id: 8,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "Finance / Self-Help",
        rating: 4.8,
        totalCopies: 10,
        availableCopies: 5,
        description:
            "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
        coverColor: "#ffffff",
        coverUrl:
            "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
        videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
        summary:
            "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    },
];

export const sorts = [
    {
        value: "oldest",
        label: "Oldest",
    },
    {
        value: "newest",
        label: "Newest",
    },
    {
        value: "available",
        label: "Available",
    },
    {
        value: "highestRated",
        label: "Highest Rated",
    },
];

export const userRoles = [
    {
        value: "user",
        label: "User",
        bgColor: "bg-[#FDF2FA]",
        textColor: "text-[#C11574]",
    },
    {
        value: "admin",
        label: "Admin",
        bgColor: "bg-[#ECFDF3]",
        textColor: "text-[#027A48]",
    },
];

export const borrowStatuses = [
    {
        value: "overdue",
        label: "Overdue",
        bgColor: "bg-[#FFF1F3]",
        textColor: "text-[#C01048]",
    },
    {
        value: "borrowed",
        label: "Borrowed",
        bgColor: "bg-[#F9F5FF]",
        textColor: "text-[#6941C6]",
    },
    {
        value: "returned",
        label: "Returned",
        bgColor: "bg-[#F0F9FF]",
        textColor: "text-[#026AA2]",
    },
];