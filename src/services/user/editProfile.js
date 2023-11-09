import userApi from "./api";

class EditProfileService {
  async editProfileData(newProfileData) {
    return await userApi.put("/profile", {
      ...newProfileData,
    });
  }

  async editProfileImage(newProfileImage) {
    return await userApi.put("/profile/image", {
      base64Image: newProfileImage,
    });
  }
}

export default new EditProfileService();
