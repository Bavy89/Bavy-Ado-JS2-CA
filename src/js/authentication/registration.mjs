import { API_REG_URL } from "./constants.mjs";
import { register } from "../handlers/register.mjs";


export function registerUser() {
  const form = document.querySelector("#reg-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { 
      method, 
      email: { value: email },
      name: { value: name },
      password: { value: password },
      banner: { value: banner },
      avatar: { value: avatar }
    } = event.target;
    
    const profile = { name, email, password, banner, avatar };

    register(API_REG_URL, profile, method);
  });
}
