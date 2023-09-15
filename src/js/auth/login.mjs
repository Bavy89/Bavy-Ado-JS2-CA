import { API_LOGIN_URL } from "./constants.mjs";
import { login } from "../handlers/login.mjs";

/**
 * loginUser function that retrieves data from a login-form, creates an object from input values, and passes it into an async function that sends the object to the API server with a method request */
export function loginUser() {
  const form = document.querySelector("#login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { method, email: { value: email }, password: { value: password } } = event.target;
    
    const profile = { email, password };

    login(API_LOGIN_URL, profile, method);
  });
}
