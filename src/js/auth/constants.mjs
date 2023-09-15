export const API_BASE_URL = "https://api.noroff.dev/api/v1";

function createApiUrl(endpoint) {
    return `${API_BASE_URL}${endpoint}`;
}

export const API_REG_URL = createApiUrl("/social/auth/register");
export const API_LOGIN_URL = createApiUrl("/social/auth/login");
export const API_POSTS_URL = createApiUrl("/social/posts?_author=true&_reactions=true&_comments=true");
export const API_SEND_URL = createApiUrl("/social/posts");
export const API_PROFILE_URL = createApiUrl("/social/profiles/");


