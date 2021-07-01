import * as api from './api'

const host = 'http://127.0.0.1:8000/';
api.settings.host = host;

// export const login = api.login;
// export const register = api.register;
// export const logout = api.logout;

// export async function getlastTenArticles() {
//     return await api.get(host + 'pets/');
// } 

export async function getAllPets() {
    return await api.get(host + 'pets/');
} 

export async function getPetDetails(id) {
    return await api.get(host + 'pets/details/' + id + "/");
}           