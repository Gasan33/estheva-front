import { NextResponse } from "next/server";
import config from "@/lib/config";
import { auth } from "@/auth";

export async function POST(request: Request) {
    try {
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await request.formData();

        const response = await fetch(`${config.env.apiEndpoint}/uploadProfilePic`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                // DO NOT set Content-Type here — let fetch set it automatically for FormData
            },
            body: formData,
        });

        if (!response.ok) throw new Error("Failed to upload");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to upload profile picture" }, { status: 500 });
    }
}
