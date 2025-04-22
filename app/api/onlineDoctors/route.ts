import { NextResponse } from "next/server";
import config from "@/lib/config";

export async function GET() {
    try {
        const response = await fetch(`${config.env.apiEndpoint}/doctors/online`, {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch doctors");

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load doctors" }, { status: 500 });
    }
}
