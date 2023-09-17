import * as storageHelper from "../storage/index.mjs";
import * as errorHandlers from "../error-messages/allPosts-error.mjs";

/**
 * Asynchronous function that fetches posts based on a specific tag from the provided API endpoint.
 * 
 * @param {string} endpoint - The complete API endpoint, inclusive of the tag-based filter.
 * @example
 * ```javascript
 * // Invoke the function using the desired API path with the required tag filter.
 * retrievePostsByTag("https://api.noroff.dev/api/v1/social/posts?_author=true&_reactions=true&_comments=true&_tag=cake");
 * ```
 * @returns {Promise<object>} The server's JSON response or an error message.
 */
export async function retrievePostsByTag(endpoint) {
  try {
    const userToken = storageHelper.load("accessToken");
    const serverResponse = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    errorHandlers.responseError(serverResponse);

    return serverResponse.json();
  } catch (issue) {
    errorHandlers.allPostsError(issue);
    console.error(issue);
  }
}
