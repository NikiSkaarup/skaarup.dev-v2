import fs from 'fs/promises';
import path from 'path';

const cacheDir = './temp/';

const getPath = (dir: string, name: string): string => path.format({
    root: cacheDir,
    name: path.join(dir, name),
    ext: '.cache.json'
});

const cacheLifeTimeMinutes = 5;
const cacheLifeTime = 1000 * 60 * cacheLifeTimeMinutes;
const validCache = (time: Date) => time > new Date(new Date().getTime() - cacheLifeTime);

export const store = async (dir: string, name: string, data: unknown) => {
    try {
        const filePath = getPath(dir, name);
        const json = JSON.stringify(data);
        await fs.writeFile(filePath, json, { encoding: 'utf8' });
        return true;
    } catch (e) {
        return false;
    }
}

export const load = async (dir: string, name: string) => {
    try {
        const filePath = getPath(dir, name);
        const stats = await fs.stat(filePath);
        if (!validCache(stats.mtime)) return undefined;
        const file = await fs.readFile(filePath, { encoding: 'utf8' });
        return JSON.parse(file);
    } catch (e) {
        return undefined
    }
}
