"use server";



export const handleContactSubmit = async (params: ContactCredentials) => {
    const { firstName, lastName, email, phoneNumber, message } = params;
    console.log(firstName);

    return { success: true, error: "server error" };
}

