import NextAuth from "next-auth";
import {NextApiRequest, NextApiResponse} from "next";
import {authOptions} from "@api/auth/[...nextauth]";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, authOptions);
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return await auth(req, res);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    return await auth(req, res);
}