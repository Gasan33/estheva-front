import { NextResponse, NextRequest } from "next/server";
import config from "@/lib/config";
import auth from "@/auth";

export async function GET(req: NextRequest) {
    try {
        // // ✅ Extract ID from request URL correctly
        // const id = req.nextUrl.searchParams.get("id");

        // if (!id) {
        //     return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        // }

        // ✅ Authenticate user
        const session = await auth();
        if (!session || !session.user?.access_token) {
            return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
        }

        // ✅ Fetch user appointments
        const response = await fetch(`${config.env.apiEndpoint}/appointments/user-appointments/${session.user.id}`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
        });

        console.log(`Fetching appointments for user ${session.user.id}:`, response.status);

        // ✅ Handle API errors properly
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to fetch appointments:", errorText);
            return NextResponse.json({ error: `Error fetching appointments: ${errorText}` }, { status: response.status });
        }
        console.log(response)

        // ✅ Return the API response
        const data = await response.json();
        return NextResponse.json(data.data);

    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "An unexpected error occurred while fetching appointments" }, { status: 500 });
    }
}
