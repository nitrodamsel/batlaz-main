import userApi from "./api";

class CountryService {
  async getData() {
    return await userApi.get("/countries");
  }
}

export default new CountryService();
