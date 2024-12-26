import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',            // Update with your backend's URL if deployed -> helps in easily updating the base URL
  withCredentials: true,                            // To send HTTP-only cookies
});

export default instance;
