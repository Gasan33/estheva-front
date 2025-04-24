import { NextResponse } from "next/server";
import config from "@/lib/config";

export async function POST(request: Request) {
    try {

        const body = await request.json();

        const response = await fetch(`${config.env.apiEndpoint}/getDoctorAvailableSlot`, {
            method: "POST",
            // credentials: "include",
            headers: {
                // "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        console.log(response)
        if (!response.ok) throw new Error("Failed to create Time Slots");

        const data = await response.json();
        console.log(data)
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create Time Slots" }, { status: 500 });
    }
}

