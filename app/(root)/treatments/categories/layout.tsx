import HeaderPath from '@/components/common/HeaderPath';
import { fetchCategories } from '@/lib/actions/categories';
import React, { ReactNode } from 'react';
import CategoryTabs from '@/components/common/CategoryTabs';


const layout = async ({ children }: { children: ReactNode }) => {
    const categories = await fetchCategories();

    return (
        <main className="root-container">
            <div className="my-6">
                <HeaderPath title="Treatments" path="/treatments" />
                <div className="px-4 md:px-8 xl:px-12">
                    <CategoryTabs categories={categories} />

                    <div>{children}</div>
                </div>
            </div>
        </main>
    );
};

export default layout;
