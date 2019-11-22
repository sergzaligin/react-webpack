import axios from 'axios';


export default (token) => {

  if(token){
    //console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
