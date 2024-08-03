import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === 'github' && profile?.sub) {
                const githubId = profile.sub.toString();
                let dbUser = await prisma.user.findUnique({
                    where: {github_id: githubId},
                });

                if (!dbUser) {
                    dbUser = await prisma.user.create({
                        data: {
                            name: profile.name ?? profile.email ?? profile.sub,
                            display_name: profile.email ?? profile.sub,
                            email: profile.email ?? "",
                            github_id: githubId,
                        },
                    });
                }

                user.id = String(dbUser.id);
                user.name = dbUser.name;
                user.email = dbUser.email;
                }
            return true;
        },
            async session({ session, token }: { session: Session, token: JWT }) {
            if (session.user) {
                // Add GitHub user ID to the session object
                session.user.id = token.sub as string;
            }
            return session;
        },
    },
};
