import { execSync } from 'child_process';
import { timeAgo } from './timeAgo';

export type CommitInfo = {
    hash: string;
    date: string;
    dateFormatted: string;
    tag?: string;
}

export function getLatestCommit(): CommitInfo {
    const customPath = '/usr/bin:/bin:/usr/sbin:/sbin'; // Define the intended PATH
    const options = {
        env: { ...process.env, PATH: customPath },
        encoding: 'utf-8' as BufferEncoding
    };

    const hash = execSync('git rev-parse --short HEAD', options).toString().trim();
    const date = execSync('git show -s --format=%ci HEAD', options).toString().trim();
    const dateFormatted = timeAgo(date);
    let tag;
    try {
        tag = execSync('git describe --tags --exact-match 2>/dev/null', options).toString().trim();
    } catch (error) {
        tag = undefined;
    }
    return { hash, date, dateFormatted, tag };
}