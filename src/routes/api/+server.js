import { error } from '@sveltejs/kit';
import path from 'path'
import { mkdirp } from 'mkdirp'
import fs from 'fs'
import { readFile } from 'fs/promises'


export async function GET({ url }) {
    const code = Number(url.searchParams.get('code') ?? '0');

    if (code) {
        const filepath = path.join(
            process.cwd(),
            'static',
            'uploads',
            `${code}.json`
        )
        const data = await readFile(filepath, { encoding: 'utf8' })
        return JSON.parse(data)
    } else {
        const filepath = path.join(
            process.cwd(),
            'static',
            'uploads'
        )
        fs.promises
            .readdir(filepath)
            .then(filenames => {
                return filenames
            })
            .catch(err => {
                console.log(err)
            })
    }
    return 0
}

export async function POST({ url }) {
    const code = Number(url.searchParams.get('code') ?? '0');
    const t9 = Number(url.searchParams.get('t9') ?? '0');

    if (code) {
        const filepath = path.join(
            process.cwd(),
            'static',
            'uploads',
            `${code}.json`
        )
        const made = mkdirp.sync(path.dirname(filepath))

        const data = JSON.stringify({ t9, time: new Date().getTime() });
        fs.writeFileSync(filepath, data);
    }

    return 0
}