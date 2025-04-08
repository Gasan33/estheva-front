'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type Category = {
    category_id: number;
    category_name: string;
    category_slug: string;
};

const CategoryTabs = ({ categories }: { categories: Category[] }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const activeId = searchParams.get('id');

    return (
        <div className="flex gap-2 items-center justify-start overflow-x-scroll overflow-y-hidden h-12 p-2 md:h-16 rounded-full bg-light-100">
            {categories.map((page) => {
                const isActive = activeId === String(page.category_id);
                return (
                    <Link
                        key={page.category_id}
                        href={{
                            pathname: `/treatments/categories/${page.category_slug}`,
                            query: { id: page.category_id, name: page.category_name }
                        }}
                        className={`px-4 py-2 md:px-6 md:py-4 rounded-full text-nowrap text-sm transition-colors duration-200 ${isActive ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-white/60'
                            }`}
                    >
                        {page.category_name.toUpperCase()}
                    </Link>
                );
            })}
        </div>
    );
};

export default CategoryTabs;
