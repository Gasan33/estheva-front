export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { cache: 'force-cache' });
    const categories = await res.json();

    return categories.data.map((category: any) => ({
        slug: category.slug,
    }));
}
