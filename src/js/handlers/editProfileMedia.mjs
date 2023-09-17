import * as storage from "../storage/index.mjs";

/**
 * Asynchronously sends an edit request for a profile to the specified API endpoint.
 * 
 * @param {string} url - The target API endpoint URL.
 * @param {object} profile - The data object containing the updated profile details.
 * @param {string} method - The HTTP request method (typically "PUT").
 * 
 * @example
 * // Usage:
 * editPost(url, profile, "PUT");
 */



export async function editProfileMedia(url, profileMedia, method) {
  const errorMessage = "Something happened while trying to edit,try again please";

  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileMedia),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.log(error);
    alert(errorMessage);
  }
}
