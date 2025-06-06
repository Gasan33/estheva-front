import { NextResponse } from "next/server";
import config from "@/lib/config";
import { auth } from "@/auth"; // Ensure this is correctly imported

export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();

        const response = await fetch(`${config.env.apiEndpoint}/doctors`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create Doctor");
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create Doctor" }, { status: 500 });
    }
}

