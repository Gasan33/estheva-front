import { NextResponse } from "next/server";
import config from "@/lib/config";
import { auth } from "@/auth";

export async function DELETE(request: Request) {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();
    try {
        const session = await auth();
        if (!session || !session.user.access_token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const response = await fetch(`${config.env.apiEndpoint}/categories/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${session.user.access_token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to delete Category");

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to delete Category" }, { status: 500 });
    }
}

