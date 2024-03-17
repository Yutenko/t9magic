import { json } from '@sveltejs/kit';
import path from 'path'
import { mkdirp } from 'mkdirp'
import fs from 'fs'
import { readFile } from 'fs/promises'


export async function GET({ url }) {
    const code = Number(url.searchParams.get('code') ?? '0');

    if (code) {
        const filepath = path.join(
            process.cwd(),
            'public',
            'uploads',
            `${code}.json`
        )
        const data = await readFile(filepath, { encoding: 'utf8' })
        return json(JSON.parse(data))
    }

    const filepath = path.join(
        process.cwd(),
        'public',
        'uploads'
    )
    const filenames = await fs.promises.readdir(filepath)
    let codes = [];
    filenames.forEach(file => {
        codes.push(path.parse(file).name)
    })
    return json({ codes })
}

export async function POST({ request }) {
    const body = await request.json();

    if (body.code) {
        const filepath = path.join(
            process.cwd(),
            'public',
            'uploads',
            `${body.code}.json`
        )
        const made = mkdirp.sync(path.dirname(filepath))

        const data = JSON.stringify({ t9: body.t9, time: new Date().getTime() });
        fs.writeFileSync(filepath, data);
    }

    return json({ msg: "OK" })
}