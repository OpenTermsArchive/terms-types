import { readFile } from 'fs/promises';

export default JSON.parse(await readFile(new URL('./termsTypes.json', import.meta.url)));
