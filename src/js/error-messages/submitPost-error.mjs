
export function submitPostError(response) {
  if (!response.ok) {
    const formError = document.querySelector("#form-error");
    formError.classList.remove("d-none");
    formError.innerHTML = `
      <p class="card-text mb-1">
        An issue occurred while submitting your post.
      </p>
      <p class="card-text mb-3">
        Consider trying again or returning later.
      </p>`;
  }
}

/**
 * Error handler that inspects if the response was conveyed accurately.
 * @param {*} error The response body when dispatching a post request to the server.
 * @example
 * // Invoke the function and supply the response from the fetch call
 * submitPostFault(error);
 */
export function submitPostFault(error) {
  if (error) {
    const formError = document.querySelector("#form-error");
    formError.classList.remove("d-none");
    formError.innerHTML = `
      <p class="card-text mb-1">
        An issue arose while submitting your post.
      </p>
      <p class="card-text mb-3">
        You might want to retry or come back later.
      </p>`;
  }
}
