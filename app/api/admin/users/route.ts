import { NextResponse } from "next/server";
import config from "@/lib/config";
import { auth } from "@/auth"; // Ensure this is correctly imported

export async function GET() {
    try {
        // ✅ Correct way to call auth() in App Router
        const session = await auth();

        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Fetch data with token
        const response = await fetch(`${config.env.apiEndpoint}/users`, {
            cache: "no-store",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to fetch Users Data");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load Users Data" }, { status: 500 });
    }
}
