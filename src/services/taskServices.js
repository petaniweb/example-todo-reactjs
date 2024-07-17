import axios from 'axios';

// Set your base URL here
const API_BASE_URL = 'http://localhost:3000/api/v1/todos';

// Get all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks', error);
    throw error;
  }
};

// Create a new task
export const createTask = async (task) => {
  try {
    const response = await axios.post(API_BASE_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task', error);
    throw error;
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.patch(API_BASE_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error update task', error);
    throw error;
  }
}

// Delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting task', error);
    throw error;
  }
};
