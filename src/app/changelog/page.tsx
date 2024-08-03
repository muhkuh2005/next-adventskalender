import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default async function Changelog() {
    const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
    const changelogContent = fs.readFileSync(changelogPath, 'utf8');
    const changelogHtml = marked(changelogContent);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: changelogHtml }} />
        </div>
    );
}