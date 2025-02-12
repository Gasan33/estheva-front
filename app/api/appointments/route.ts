import { NextResponse } from "next/server";
import config from "@/lib/config";
import auth from "@/auth"; // Import your auth function

export async function GET() {
    try {
        // Get session
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Fetch data with token
        const response = await fetch(`${config.env.apiEndpoint}/appointments/user-appointments`, {
            method: 'GET',
            cache: "no-store",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to fetch appointments");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load appointments" }, { status: 500 });
    }
}
