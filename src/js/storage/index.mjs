/**
 * Saves a key/value pair in localStorage.
 * @param {string} key - Name of the key to store in localStorage.
 * @param {*} value - Value associated with the key.
 * @example
 * // Save a key-value pair to localStorage
 * save('keyName', 'valueName');
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves a saved item from localStorage based on a given key.
 * @param {string} key - Name of the key to retrieve from localStorage.
 * @returns {*} - Value associated with the key.
 * @example
 * // Get value from localStorage by key
 * load('accessToken');
 */
export function load(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}

/**
 * Removes an item from localStorage based on a given key.
 * @param {string} key - Name of the key to remove from localStorage.
 * @example
 * // Remove a key-value pair from localStorage
 * remove('user');
 */
export function remove(key) {
  localStorage.removeItem(key);
}

/**
 * Clears all items from localStorage.
 * @example
 * // Clear the entire localStorage
 * clear();
 */
export function clear() {
  localStorage.clear();
}
