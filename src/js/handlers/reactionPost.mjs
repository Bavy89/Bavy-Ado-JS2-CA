import * as storage from "../storage/index.mjs";

/**
 * Asynchronously sends a request to a URL endpoint with a postId and symbol string.
 * 
 * @param {string} url - The URL endpoint containing postId and reaction symbol.
 * @param {string} method - The HTTP method type.
 * 
 * @example
 * // Usage:
 * sendReaction("https://api.noroff.dev/api/v1/social/posts/26/react/👍", "PUT");
 */
export async function sendReaction(url, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      window.location.reload();
    } else if (!response.ok) {
      throw alert("try again");
    }
  } catch (error) {
    console.log(error);
    throw alert("try again");
  }
}
