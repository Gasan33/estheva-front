export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, { cache: 'force-cache' });
    const blogs = await res.json();

    return blogs.data.map((blog: any) => ({
        slug: blog.slug,
    }));
}
