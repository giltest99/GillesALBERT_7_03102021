import axios from "axios";
const postsApi = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const getPosts = async () => {
    const response = await postsApi.get("/posts")
    return response.data
}

export const getPost = async ({ id }) => {
    return await postsApi.get(`/posts/${id}`, id)
}

export const addPost = async (post) => {
    return await postsApi.post("/posts", post)
}

export const updatePost = async (post) => {
    return await postsApi.patch(`/posts/${post.id}`, post)
}

export const deletePost = async ({ id }) => {
    return await postsApi.delete(`/posts/${id}`, id)
}

export default postsApi; 