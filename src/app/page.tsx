import Link from "next/link";
import Image from "next/image";
import 'react-loading-skeleton/dist/skeleton.css';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@api/auth/[...nextauth]";
import LogoutButton from "@components/common/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
    if (!session) {
        // noinspection HtmlUnknownTarget
        return (
            <div>
                <Link href="/api/auth/signin">Login</Link>
            </div>
        );
    }
    return (
        <div>
            <p>Signed in as {session.user.email} ({session.user.id})</p>
            {session.user.image && session.user.name && (
                <Image
                    src={session.user.image}
                    alt={session.user.name}
                    title={session.user.id}
                    width={250}
                    height={250}
                    quality={70}
                    placeholder={"blur"}
                    blurDataURL={`data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="black" stroke-width="4" fill="none"/><circle cx="20" cy="20" r="10" stroke="black" stroke-width="4" fill="none"/><circle cx="20" cy="20" r="2" stroke="black" stroke-width="4" fill="none"/></svg>')}`}
                />
            )}
            <LogoutButton />
        </div>
    );
}