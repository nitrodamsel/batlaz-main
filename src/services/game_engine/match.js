import gameApi from "./api";

class MatchService {
  async hasMatch() {
    const response = await gameApi.get(`/match`);
    return response.data["hasMatch"];
  }
}

export default new MatchService();
