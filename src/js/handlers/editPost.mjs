import * as storageUtils from "../storage/index.mjs";

/**
 * Asynchronously sends an edit request for a post to the specified API endpoint.
 * 
 * @param {string} url - The API endpoint URL for the request.
 * @param {object} post - The data object containing the updated post details.
 * @param {string} method - The HTTP request method (typically "PUT").
 * 
 * @example
 * // Usage:
 * editPost(url, post, "PUT");
 */

export const editPost = async (url, post, method) => {
  const errorMessage = "Something happened while trying to edit the post. Please try again.";

  try {
    const token = storageUtils.load("accessToken");
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    window.location.reload();
  } catch (error) {
    console.error(error);
    alert(errorMessage);
  }
}
