import axios from 'axios';
import store from '../store';
import Cookie from 'cookie';
import Cookies from 'js-cookie';

const cookieStr = process.browser
? document.cookie
: this.app.context.req.headers.cookie;
const cookies = Cookie.parse(cookieStr || '') || {};
const token = cookies['jwt-token'];


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});


const instance2 = axios.create({
  baseURL: 'http://localhost:4445/api/',
  headers: {
    "Authorization" : `${ token }`,
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
