import axios from'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-bcc3f.firebaseio.com/'
})

export default instance;