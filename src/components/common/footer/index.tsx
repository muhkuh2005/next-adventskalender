import React from "react";
import {CommitInfo} from "@lib/getLatestCommit";
import 'react-loading-skeleton/dist/skeleton.css';
import FooterSkeleton from "@components/common/footer/Skeleton";
import LogoutButton from "@components/common/menu/LogoutButton";

async function fetchCommitInfo(): Promise<CommitInfo> {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/commit`);
    if (!res.ok) {
        throw new Error('Failed to fetch commit info');
    }
    return res.json();
}

export default async function Footer() {
    let commitInfo: CommitInfo | null = null;

    try {
        commitInfo = await fetchCommitInfo();
    } catch (error) {
        console.error('Failed to fetch commit info:', error);
    }

    if (!commitInfo) {
        return <FooterSkeleton />;
    }

    return (
        <div className="flex justify-between w-full">
            <p>Latest Commit: {commitInfo.tag ? commitInfo.tag : commitInfo.hash}</p>
            <p title={commitInfo.date}>Date: {commitInfo.dateFormatted}</p>
            <LogoutButton/>
        </div>
    );
}