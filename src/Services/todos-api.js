import axios from 'axios'
const baseURL = 'http://localhost:3001/todos'

export const getTodos = ()=> {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

// show one 
export const getTodo =(id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit the Todo
export const editTodo = (id, updatedTodo) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedTodo);
    return response;
}

// create the Todo
export const createTodo = (todo) => {
    const URL = baseURL
    const response = axios.post(URL, todo)
    return response
}

// Delete the Todo
export const deleteTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}