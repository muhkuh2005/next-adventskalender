import { NextResponse } from 'next/server';
import { getLatestCommit } from '@lib/getLatestCommit';

async function getCommit() {
    try {
        const commitInfo = getLatestCommit();
        return NextResponse.json(commitInfo, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch commit info', raw: JSON.stringify(error) }, { status: 500 });
    }
}

export async function GET() {
    return await getCommit();
}

export { getCommit };