import { registerUser } from "./authentication/registration.mjs";
import { setup } from "./posts/setup.mjs";
import { setupProfile } from "./profile/setup.mjs";
import { signout } from "./authentication/logout.mjs";
import { loginUser } from "./authentication/login.mjs";
import { validateTokens } from "./authentication/validateTokens.mjs";

/**
 * // Function that checks which page the user is on and runs the functions that is needed on that page
 * @example
 * // run the router
 * router();
 */
export function router() {
  const path = window.location.pathname;

  if (path === "/" || path === "/index.html") {
    loginUser();
  } else if (path === "/registration.html") {
    registerUser();
  } else if (path === "/home.html") {
    setup();
    signout();
    validateTokens();
  } else if (path === "/post-filter.html") {
    setupFilterTags();
    signout();
    validateTokens();
  } else if (path === "/post-sorted.html") {
    setupSorting();
    signout();
    validateTokens();
  } else if (path === "/post-specific.html") {
    setupSpecificPost();
    signout();
    validateTokens();
  } else if (path === "/profile.html") {
    setupProfile();
    signout();
    validateTokens();
  } else if (path === "/profile-specific.html") {
    setupSpecificProfile();
    followProfile();
    unfollowProfile();
    validateTokens();
  }
}
