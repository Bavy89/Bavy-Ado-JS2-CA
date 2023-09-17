import * as storageUtils from "../storage/index.mjs";

export const signout = () => {
  const signoutLinks = document.querySelectorAll(".sign-out");
  signoutLinks.forEach(linkElement => {
    linkElement.addEventListener("click", handleSignoutClick);
  });
}

const handleSignoutClick = event => {
  event.preventDefault();
  storageUtils.clear();
}
