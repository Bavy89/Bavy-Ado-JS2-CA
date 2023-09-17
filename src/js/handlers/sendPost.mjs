import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/submitPost-error.mjs";
/**
 * Asynchronously sends a POST request to the specified API server with a provided object.
 * 
 * @param {string} url - The API server endpoint.
 * @param {object} post - The object to send as the request body.
 * @param {string} method - The HTTP request method (e.g., "POST").
 * 
 * @example
 * // Usage:
 * forwardPost(url, post, "POST");
 */

export async function forwardPost(url, post, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    if (response.ok) {
      window.location.reload();
    }
    check.submitPostError(response);
  } catch (error) {
    check.submitPostFault(error);
    console.log(error);
  }
}
