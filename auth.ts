import NextAuth, { User, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import config from "./lib/config";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            name: string;
            email: string;
            access_token: string; // Ensure it's inside user object
        };
    }

    interface User {
        access_token: string;
    }

    interface JWT {
        id: string;
        name: string;
        email: string;
        access_token: string;
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

                    return {
                        id: data.user.id.toString(),
                        email: data.user.email,
                        name: data.user.name,
                        access_token: data.access_token, // Correctly map token
                    } as User;
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
                token.access_token = user.access_token; // Store access token in JWT
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
            };
            return session;
        },
    },
    events: {
        async signOut(message) {
            // You can handle any custom actions here when a user signs out.
            console.log("User signed out:", message);
            // You can make an API call to invalidate the session if needed
            await fetch(`${apiEndpoint}/logout`, { method: 'POST' });
        },
    },
});

export default auth;
