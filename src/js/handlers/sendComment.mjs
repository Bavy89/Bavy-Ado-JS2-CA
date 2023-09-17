import * as storage from "../storage/index.mjs";
/**
 * Asynchronously sends a comment to the specified API endpoint.
 * 
 * @param {string} url - The API endpoint URL for the request.
 * @param {object} comment - The data object containing the comment details.
 * @param {string} method - The HTTP request method (typically "POST").
 * 
 * @example
 * // Usage:
 * sendComment(API_COMMENT_URL, comment, "POST");
 */

export async function sendComment(url, comment, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    });
    if (response.ok) {
      window.location.reload();
  } else if (!response.ok) {
      alert("There was an issue sending your comment. Please try again.");
      console.log(response);
  } 
  } catch (error) {
      console.log(error);
      alert("There was an issue sending your comment. Please try again.");
  }
  }