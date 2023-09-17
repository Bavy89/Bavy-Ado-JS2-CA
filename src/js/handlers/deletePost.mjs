import * as storageUtils from "../storage/index.mjs";

/**
 * Asynchronously deletes a post using its Post ID from the provided API endpoint.
 * 
 * @param {string} url - The API endpoint URL containing the Post ID.
 * @param {string} method - The HTTP request method, typically "delete".
 * 
 * @example
 * // Usage:
 * deletePost("https://api.noroff.dev/api/v1/social/posts/4599", "delete");
 * // This action will remove the post with ID 4599 from the server.
 */


export const deletePost = async (url) => {
  const errorMessage = "Something happened while trying to delete the post. Please try again.";

  try {
    const token = storageUtils.load("accessToken");
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
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
