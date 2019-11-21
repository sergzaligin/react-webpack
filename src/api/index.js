import axios from 'axios';
import store from '../store'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const instance2 = axios.create({
  baseURL: 'http://localhost:4445/api/',
  headers: {
    "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGQzOWQ4NTM4MDZjNDc0OTI4MzQ4NDQiLCJuaWNrbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5ydSIsInJvbGUiOiJyZWdpc3RlciIsImF2YXRhciI6Ii9hdmF0YXIvbm9hdmF0YXIuanBnIiwic2lnbmF0dXJlIjoiIiwiaWF0IjoxNTc0MzM5MjAzLCJleHAiOjE1NzQzNDI4MDN9.ViDlt2STtKtO3uwGlB6qV859cQGsjQEBnrOJgW0PQSA`,
    'Content-Type': 'application/json',
  },
});

export const todoApi = ({

  getTodos(){
    return instance.get(`todos`);
  },

  getNewTodos(){
    return instance.get(`users`);
  },

});

export const authApi = ({

  login(email, password, nickname){
    return instance2.post(`auth/login`, { email, password, nickname });
  },

});


export const postsApi = ({

  getPostsPrev(){
    return instance2.get(`article/list`);
  },
  getPostById(id){
    return instance2.get(`article/${ id }`);
  },
});
