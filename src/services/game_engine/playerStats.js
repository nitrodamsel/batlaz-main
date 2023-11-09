import gameApi from "./api";

class PlayerStatsService {
  async getData() {
    return await gameApi.get("/statistics");
  }
}

export default new PlayerStatsService();
