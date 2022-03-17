import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
  } catch (error) {
    console.error(error);
  }
})();


