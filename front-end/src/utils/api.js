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


