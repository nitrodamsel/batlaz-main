class TokenService {
  getLocalRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  getLocalAccessToken() {
    return localStorage.getItem("accessToken");
  }

  updateLocalRefreshToken(rToken) {
    localStorage.setItem("refreshToken", rToken);
  }

  updateLocalAccessToken(aToken) {
    localStorage.setItem("accessToken", aToken);
  }

  removeLocalRefreshToken() {
    return localStorage.removeItem("refreshToken");
  }

  removeLocalAccessToken() {
    return localStorage.removeItem("accessToken");
  }
}

export default new TokenService();
