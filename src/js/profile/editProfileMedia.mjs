import { API_BASE_URL } from "../authentication/constants.mjs";
import { editProfileMedia } from "../handlers/editProfileMedia.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Adds an event listener to the edit-profile form. When the form is submitted, it collects the form data
 * and sends it to the API server to update the selected profile's media (avatar and banner).
 * 
 * @example
 * editProfileListener();
 */
export function editProfileListener() {
  const user = storage.load("profile").name;
  const editProfileForm = document.querySelector("#update-profile-media");

  editProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = "PUT";
    const avatar = formData.avatar.value;
    const banner = formData.banner.value;
    const editPath = `/social/profiles/${user}/media`;
    const API_EDIT_URL = `${API_BASE_URL}${editPath}`;
    const profileMedia = {
      avatar,
      banner,
    };
    
    editProfileMedia(API_EDIT_URL, profileMedia, method);
  });
}
