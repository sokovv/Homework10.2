import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
    async load() {
        const response = await read();
        const data = await json(response);
        return JSON.parse(data)
    }
}
