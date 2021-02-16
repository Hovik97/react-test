const BASE_URL = 'https://app.highattendance.com'

export const API = {
    get: async (endpoint = '') => {
        const res = await fetch(`${BASE_URL}/${endpoint}`);
        return res.json();
    },
    getText: async (endpoint = '') => {
        const res = await fetch(`${BASE_URL}/${endpoint}`);
        return res.text();
    }
}