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

        const response = await fetch(`${config.env.apiEndpoint}/favorites/check`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error("Failed to check favorites");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to check favorites" }, { status: 500 });
    }
}

