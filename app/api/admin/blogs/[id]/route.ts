import { NextResponse, NextRequest } from "next/server";
import config from "@/lib/config";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
        return NextResponse.json({ error: "slug parameter is missing" }, { status: 400 });
    }

    try {
        // Fetch data from external API
        const response = await fetch(`${config.env.apiEndpoint}/blogs/${id}`, {
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
