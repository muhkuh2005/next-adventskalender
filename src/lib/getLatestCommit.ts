import { execSync } from 'child_process';
import { timeAgo } from './timeAgo';

export type CommitInfo = {
    hash: string;
    date: string;
    dateFormatted: string;
    tag?: string;
}

export function getLatestCommit(): CommitInfo {
    const hash = execSync('git rev-parse --short HEAD').toString().trim();
    const date = execSync('git show -s --format=%ci HEAD').toString().trim();
    const dateFormatted = timeAgo(date);
    let tag;
    try {
        tag = execSync('git describe --tags --exact-match 2>/dev/null').toString().trim();
    } catch (error) {
        tag = undefined;
    }
    return { hash, date, dateFormatted, tag };
}