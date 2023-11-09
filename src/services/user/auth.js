import userApi from "./api";
import TokenService from "../token";

class AuthService {
  login(email, password) {
    return userApi
      .post("/authentication/sign-in", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          TokenService.updateLocalAccessToken(response.data.accessToken);
          TokenService.updateLocalRefreshToken(response.data.refreshToken);
        }

        return response.data;
      });
  }

  signUp(signUpData) {
    return userApi.post("/signup", signUpData);
  }

  changePassword(newPassword) {
    return userApi.post("/authentication/password-change", {
      existingPassword: newPassword.existingPassword,
      newPassword: newPassword.newPassword,
    });
  }

  resetPassword(email) {
    return userApi.post("/authentication/init-password-reset", {
      email: email,
    });
  }

  setNewPassword(isCode, myEmail, newPass) {
    return userApi.post("/authentication/password-reset", {
      code: isCode,
      email: myEmail,
      newPassword: newPass,
    });
  }

  verifyResetPasswordOTP(myEmail, pinCode) {
    return userApi.post("/authentication/init-password-otp-check", {
      email: myEmail,
      code: pinCode,
    });
  }
}

export default new AuthService();
