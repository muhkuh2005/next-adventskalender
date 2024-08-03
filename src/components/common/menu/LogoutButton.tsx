'use client';

import { signOut } from "next-auth/react";

export default function LogoutButton({ className }: { className?: string }) {
    return (
        <button className={className} onClick={() => signOut()}>Sign out</button>
    );
}