import axios from 'axios';

/*
    Uses axios to call user_api and create functions
*/

/**
 * @apiDescription 1 of 3 baseURL of this API.
 * The base path regarding the users who gives use to this scheduler.
 * http://localhost:9000/user
 */
const api = axios.create({
    baseURL: 'http://localhost:9000/user'
});

export const addUser = payload => api.post('/user', payload);
export const authUser = payload => api.post(`/auth`, payload);
export const getUserByName = username => api.get(`/user/${username}`);
export const deleteUser = username => api.delete(`/user/${username}`);

const apis = {
    addUser,
    getUserByName,
    deleteUser,
    authUser
};

export default apis;