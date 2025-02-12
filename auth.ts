import NextAuth, { User, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import config from "./lib/config";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            name: string;
            email: string;
            access_token: string;
            role: string;
        };
    }

    interface User {
        access_token: string;
        role: string;
    }

    interface JWT {
        id: string;
        name: string;
        email: string;
        access_token: string;
        role: string;
    }
}

const { env: { apiEndpoint } } = config;

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials");
                }

                try {
                    const response = await fetch(`${apiEndpoint}/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error("Invalid login credentials");
                    }

                    const data = await response.json();

                    if (!data || !data.user || !data.access_token) {
                        throw new Error("Invalid API response");
                    }

                    // Ensure `role` is returned or use a default if necessary
                    const { id, email, name, role } = data.user;
                    return {
                        id: id.toString(),
                        email,
                        name,
                        access_token: data.access_token, // Correctly map token
                        role: role || "user", // Default to "user" if no role is provided
                    } as unknown as User;
                } catch (error) {
                    console.error("Login Error:", error);
                    throw new Error("Login failed");
                }
            },
        }),
    ],
    pages: {
        signIn: "/sign-in",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.access_token = user.access_token;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id as string,
                name: token.name as string,
                email: token.email as string,
                access_token: token.access_token as string,
                emailVerified: null,
                role: token.role as string,
            };
            return session;
        },
    },
    events: {
        async signOut() {
            // Handle user sign out action here
            console.log("User signed out");
            await fetch(`${apiEndpoint}/logout`, { method: 'POST' });
        },
    },
});

export default auth;
