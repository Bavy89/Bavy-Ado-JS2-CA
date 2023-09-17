import * as storage from "../storage/index.mjs";

/**
 * Async function to retrieve a specific post from the API server.
 * Has nested function calls that generate and display dynamic HTML for the post.
 * @param {string} url - The API endpoint.
 * @returns {Object} - The JSON response if successful, redirects to /home.html otherwise.
 * @example
 * ```js
 * // Call the function and pass in the API URL
 * getSpecificPost(url);
 * ```
 */
export async function getSpecificPost(url) {
  try {
    const token = storage.load("accessToken");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      redirectToHome();
    }

    return await response.json();

  } catch (error) {
    redirectToHome();
  }
}

function redirectToHome() {
  window.location.replace("/home.html");
}
