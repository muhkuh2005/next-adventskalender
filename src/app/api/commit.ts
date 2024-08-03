import type { NextApiResponse } from 'next';
import { getLatestCommit } from '@lib/getLatestCommit';

type ResponseData = {
    hash: string,
    date: string,
}

type ResponseError = {
    error: string;
    raw: string;
}

export default function handler(res: NextApiResponse<ResponseData|ResponseError>) {
    try {
        const commitInfo = getLatestCommit();
        res.status(200).json(commitInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch commit info', raw: JSON.stringify(error) });
    }
}