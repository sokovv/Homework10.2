import json from '../parser.js';
import read from '../reader.js';
import GameSavingLoader from '../GameSavingLoader.js';

const gameSavingLoader = new GameSavingLoader()

test('should work with async/await', async () => {
    const data = await gameSavingLoader.load();
    const obj = {
        "id": 9,
        "created": 1546300800,
        "userInfo": {
            "id": 1,
            "name": "Hitman",
            "level": 10,
            "points": 2000
        }
    }
    expect(data).toEqual(obj);
});

