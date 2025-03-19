import { NextResponse } from "next/server";
import config from "@/lib/config";


export async function GET() {
    try {

        const response = await fetch(`${config.env.apiEndpoint}/blogs`, {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch Blogs");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load Blogs" }, { status: 500 });
    }
}
