'use client';

import { signOut } from "next-auth/react";

interface LogoutButtonProps {
    readonly className?: string;
}

export default function LogoutButton({ className }: LogoutButtonProps) {
    return (
        <button className={className} onClick={() => signOut()}>Sign out</button>
    );
}