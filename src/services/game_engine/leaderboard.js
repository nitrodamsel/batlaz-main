import gameApi from "./api";

class LeaderboardService {
  async getData() {
    return await gameApi.get("/leaderboards/players");
  }
}

export default new LeaderboardService();
