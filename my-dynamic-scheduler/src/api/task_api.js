import axios from 'axios';

/*
    Uses axios to call task_api and create functions
*/

/**
 * @apiDescription 1 of 3 baseURL of this API.
 * The base path of the tasks described in this scheduler.
 * http://localhost:9000/task
 */
const api = axios.create({
    baseURL: 'http://localhost:9000/task'
});

export const addTask = payload => api.post('/task', payload);
export const getTasks = username => api.get(`/task/${username}`);
export const deleteTask = id => api.delete(`/task/${id}`);

const apis = {
    addTask,
    deleteTask,
    getTasks
};

export default apis;