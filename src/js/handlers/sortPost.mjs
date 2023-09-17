import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
/**
 * Asynchronously fetches and displays sorted posts based on the provided API endpoint and sorting flags.
 * 
 * @param {string} url - The API endpoint with sorting flags such as sort="typeOfSort" & sortOrder="sortOrder".
 * 
 * @example
 * // Usage:
 * sortedPosts("https://api.noroff.dev/api/v1/social/posts?sort=title&sortOrder=asc&_author=true&_reactions=true&_comments=true");
 */

export async function sortedPosts(url) {
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
