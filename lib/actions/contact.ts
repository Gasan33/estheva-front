"use server";

export const handleContactSubmit = async (params: ContactCredentials) => {
    const { firstName, lastName, email, phoneNumber, message } = params;

    return { success: true, error: "server error" };
}

