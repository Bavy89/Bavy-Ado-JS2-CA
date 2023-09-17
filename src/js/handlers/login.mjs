import * as storage from "../storage/index.mjs";
import { loginError } from "../error-messages/login-error.mjs";

/**
 * Asynchronously sends a HTTP POST request to the API server for user login.
 * 
 * @param {string} url - The URL endpoint to which the POST request is sent.
 * @param {object} user - The user details required for logging in.
 * @param {string} method - The HTTP method (typically "POST").
 * 
 * @example
 * // Usage:
 * login(url, user, "POST");
 */

export async function login(url, profile, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(profile),
    });
    const json = await response.json();
    const { accessToken, ...user } = json;
    storage.save("accessToken", accessToken);
    storage.save("profile", user);
    loginError(response);
  } catch (error) {
    console.log(error);
  }
}
