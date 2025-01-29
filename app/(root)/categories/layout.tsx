import React, { ReactNode } from 'react'
import CategoryList from "./_components/CategoryList"

const layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className='grid grid-cols-[1fr,2fr,2fr,2fr]'>
            <div className='hidden md:block'>
                {/* Category */}
                <CategoryList />
            </div>
            <div className=' col-span-4 md:col-span-3'>
                {children}
            </div>
        </div>
    )
}

export default layout