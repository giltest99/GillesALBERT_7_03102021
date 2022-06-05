import axios from 'axios';

export const getAllPosts = async () => {
    const response = await axios.get('http://localhost:3000/api/posts')
    console.log(response.data);
    return response.data
}