import { NextResponse } from "next/server";
import config from "@/lib/config";
import { auth } from "@/auth";

export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();

        const response = await fetch(`${config.env.apiEndpoint}/blogs`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error("Failed to create Blog");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create Blog" }, { status: 500 });
    }
}

