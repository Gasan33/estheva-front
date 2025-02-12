import { NextResponse } from "next/server";
import config from "@/lib/config";
import auth from "@/auth"; // Import your auth function

export async function GET() {
    try {


        // Fetch data with token
        const response = await fetch(`${config.env.apiEndpoint}/treatments`, {
            cache: "no-store",
            // headers: {
            //     "Authorization": `Bearer ${session.user.access_token}`,
            //     "Content-Type": "application/json",
            // },
        });

        if (!response.ok) throw new Error("Failed to fetch treatments");

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load treatments" }, { status: 500 });
    }
}
