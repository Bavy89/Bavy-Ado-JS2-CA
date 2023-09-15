/**
 * Displays an error message if an HTTP request doesn't return a successful response.
 * @param {object} response - The response object from an HTTP request.
 * @example
 * // Handle unsuccessful response from a fetch call
 * responseError(response);
 */
const postContainer = document.querySelector("#post-container");

function displayError(message, buttonText, buttonLink) {
    postContainer.innerHTML = `
        <h2 class="custom-label mt-3">Feed</h2>
        <p class="card-text mb-4">${message}</p>
        <a href="${buttonLink}" class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
            ${buttonText}
        </a>`;
}

export function responseError(response) {
    if (!response.ok) {
        const message = "An error has occurred. Please refresh the page or try again later. Please try another account.";
        const buttonText = "Try again";
        const buttonLink = "./home.html";

        displayError(message, buttonText, buttonLink);
    }
}

/**
 * Displays an error message if there's any caught error during an HTTP request.
 * @param {Error} error - The error object caught during an HTTP request.
 */
export function allPostsError(error) {
    if (error) {
        const message = "An error has occurred. Please refresh the page or try again later.";
        const buttonText = "Refresh";
        const buttonLink = "./home.html";

        displayError(message, buttonText, buttonLink);
    }
}
