import axios from 'axios';

export default (token) => {
  if(token){
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `${ token }`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
