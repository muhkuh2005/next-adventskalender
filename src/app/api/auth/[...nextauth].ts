import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }: { session: Session, token: JWT, user: User }) {
            if (session.user) {
                // Add GitHub user ID to the session object
                session.user.id = token.sub as string;
            }
            return session;
        },
    },
};
