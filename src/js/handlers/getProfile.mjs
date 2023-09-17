import * as storage from "../storage/index.mjs";
import { responseError } from "../error-messages/allPosts-error.mjs";

/**
 * Async function to retrieve a profile from the API server.
 * @param {string} url - The API endpoint.
 * @returns {Object} - Response data in JSON format.
 * @example
 * ```js
 * // Call the function and pass in the API URL
 * getMyProfile(url);
 * ```
 */
export async function getMyProfile(url) {
  try {
    const token = storage.load("accessToken");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();

  } catch (error) {
    responseError(error);
  }
}
