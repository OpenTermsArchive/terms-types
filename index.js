import { readFile } from 'fs/promises';

export default JSON.parse(await readFile(new URL('./documentTypes.json', import.meta.url)));
