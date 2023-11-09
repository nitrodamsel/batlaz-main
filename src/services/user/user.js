import userApi from "./api";

class UserService {
  async getData() {
    return await userApi.get("/profile");
  }

  async getDataOverview(playerId) {
    return await userApi.get(`/profile/overview?UserId=${playerId}`);
  }
}

export default new UserService();
