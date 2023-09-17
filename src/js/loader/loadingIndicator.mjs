/**
 * Function that toggles the loadingIndicator on or off, depending on the argument passed in.
 * @param {*} posts
 * @example
 */
export function toggleLoadingIndicator(posts) {
  const toggleLoadingIndicatorElement = document.querySelector(".toggleLoadingIndicator");
  
  toggleLoadingIndicatorElement.classList[posts ? 'add' : 'remove']("d-none");
}
