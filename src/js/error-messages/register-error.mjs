/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {object} response // Checks if there were any false returns from the ok property in the http request
 * @example
 * ```
 * // Call the function and pass in the the response object from a fetch call
 * registrationError(response);
 * ```
 */
export function registrationError(response) {
  const registerCard = document.querySelector("#register-card");
  
  if (!response.ok) {
    registerCard.innerHTML = `
      <h1 class="card-title mt-3 mb-4">Register</h1>
      <p class="card-text mb-4">
        Looks like this profile already exists.
      </p>
      <p class="card-text mb-3">
        Consider using different credentials.
      </p>
      <a href="./registration.html" class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
        Try again
      </a>`;
  } else {
    registerCard.innerHTML = `
      <h1 class="card-title mt-3 mb-4">Success!</h1>
      <p class="card-text mb-2">
        Welcome! Your account has been set up.
      </p>
      <p class="card-text mb-3">
        Navigate to the login page to access your account.
      </p>
      <a href="./index.html" class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
        Login
      </a>`;
  }
}

