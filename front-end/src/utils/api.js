import axios from 'axios';

const baseURL = 'http://localhost:3000/api/'

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}posts`)
        console.log(response.data);
        return response.data
    }
    catch (error) {
        throw new Error('Pas de ressource disponible')
    }
    
}

export const getOnePost = async ({ queryKey }) => {
    /* eslint-disable no-unused-vars */
    const [_key, { id }] = queryKey;
    const response = await fetch(`${baseURL}/posts/${id}`);
  
    if (!response.ok) {
      throw new Error(response.json().message);
    }
  
    return response.json();
  };
