"use client"
import React from 'react'
import ServiceList from "../../../../components/common/TreatmentsList"
import { usePathname } from 'next/navigation'

const Category = () => {
    // let categoryname = '';
    const parms = usePathname()
    const category = parms.split('/')[2]
    if (category.includes('-')) {
        console.log('include')
        // categoryname = category.split('-')[0] + ' ' + category.split('-')[1];

    }
    return (
        <div>
            <ServiceList category={category} />
        </div>
    )
}

export default Category