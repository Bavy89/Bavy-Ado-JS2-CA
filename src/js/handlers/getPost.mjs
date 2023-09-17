import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";

/**
 * Asynchronously retrieves all posts from the API server using a GET request with an authorization token.
 * 
 * @param {string} url - The API endpoint URL.
 * 
 * @example
 * // Usage:
 * getPost(url);
 */

export async function getPost(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    check.responseError(response);
    return await response.json();
  } catch (error) {
    check.allPostsError(error);
  }
}
