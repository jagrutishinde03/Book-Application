import axios from 'axios';

const API_BASE_URL = 'https://softwium.com/api';

export const getBooks = (query) => axios.get(`${API_BASE_URL}/books`, { params: { q: query } });
export const getBookById = (id) => axios.get(`${API_BASE_URL}/books/${id}`);
