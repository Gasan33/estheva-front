import { NextResponse, NextRequest } from "next/server";
import config from "@/lib/config";

export async function GET(req: NextRequest) {
    // ✅ Extract ID from the request URL
    const url = new URL(req.url);
    const slug = url.pathname.split("/").pop(); // Extract ID from the dynamic route

    if (!slug) {
        return NextResponse.json({ error: "slug parameter is missing" }, { status: 400 });
    }

    try {
        // Fetch data from external API
        const response = await fetch(`${config.env.apiEndpoint}/blogs/slug/${slug}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${auth.getToken()}`, // Uncomment if needed
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch blog" }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load blog" }, { status: 500 });
    }
}
