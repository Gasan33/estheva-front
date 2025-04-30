import { NextResponse } from "next/server";
import config from "@/lib/config";

export async function GET() {
    try {

        const response = await fetch(`${config.env.apiEndpoint}/faqs/all`, {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch Faqs");

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load Faqs" }, { status: 500 });
    }
}
