import gameApi from "./api";

class GameService {
  async getData(category) {
    return gameApi.get(`/games?type=${category}`);
  }

  async register(id) {
    return gameApi.put(`/games/register`, {
      gameId: id,
    });
  }
}

export default new GameService();
