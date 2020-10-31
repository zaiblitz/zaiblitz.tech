export const API_URL = process.env.REACT_APP_API_URL;
export const TOKEN_STORAGE_KEY = 'token';

export function getToken() {
    return localStorage.getItem("token");
};

export function getHeaders() {
    const storage = localStorage.getItem(TOKEN_STORAGE_KEY);
    const token = (storage) ? JSON.parse(storage) : null;
    return {
        Authorization: `Bearer ${token.token}`,
        apiKey: token.apiKey
    }
};
