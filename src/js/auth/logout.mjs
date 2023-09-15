import * as storage from "../storage/index.mjs";

/**
 * Function that listens to user click on "signout" link in navigation. 
 * If link is clicked, the localStorage gets cleared of items.
 * @example
 * ```js
 * // clear the localStorage when signing out.
 * ```
 */
export function signout() {
  const signoutLinks = document.querySelectorAll(".sign-out");
  signoutLinks.forEach((linkElement) => {
    linkElement.addEventListener("click", (event) => {
      event.preventDefault();
      storage.clear();
    });
  });
}
