import { registrationError } from "../error-messages/register-error.mjs";

/**
 * Asynchronously sends a HTTP POST request to the API server to register a user.
 * 
 * @param {string} url - The API endpoint URL.
 * @param {object} profile - User properties for registration.
 * @param {string} method - The HTTP method (typically "POST").
 * 
 * @example
 * // Usage:
 * register(url, profile, "POST");
 * // Expected return: {id: , name: '', email: '', banner: '', avatar: ''}
 */

export async function register(url, profile, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(profile),
    });
    const json = await response.json();
    registrationError(response);
  } catch (error) {
    console.log(error);
  }
}
