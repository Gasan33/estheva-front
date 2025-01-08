import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation';
const HeaderPath = () => {
    const pathname = usePathname();
    const path = pathname.split('/');
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>{pathname.split("/").pop()}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default HeaderPath