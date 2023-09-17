import * as storageHelper from "../storage/tools.mjs";

/**
 * Asynchronously sends a PUT request to the specified API endpoint to initiate a user follow.
 * 
 * @param {string} endpoint - The target API endpoint.
 */
export async function initiateUserFollow(endpoint) {
  try {
    const userToken = storageHelper.retrieve("accessToken");
    const serverResponse = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (serverResponse.ok) {
      window.location.reload();
    } 
    // Optionally, you can include additional logic to handle unsuccessful responses.

  } catch (issue) {
    console.error(issue);
  }
}
