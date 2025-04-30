import { NextResponse, NextRequest } from "next/server";
import config from "@/lib/config";
import { auth } from "@/auth";

export async function GET(req: NextRequest) {
    const session = await auth();

    if (!session || !session.user.access_token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
        return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    try {
        const response = await fetch(`${config.env.apiEndpoint}/doctors/${id}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.user.access_token}`,
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch doctor" }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load doctor" }, { status: 500 });
    }
}
