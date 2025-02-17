import { NextResponse } from "next/server";
import config from "@/lib/config";
import auth from "@/auth"; // Import your auth function

// GET: Fetch user appointments
export async function GET() {
    try {
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

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

export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();

        const response = await fetch(`${config.env.apiEndpoint}/appointments`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error("Failed to create appointment");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
    }
}
