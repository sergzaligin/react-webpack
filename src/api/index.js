import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const todoApi = ({

  getTodos(){
    return instance.get(`todos`);
  },

});
