import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchPost = ({ queryKey }) => {
    const postId = queryKey[1]
    return axios.get(`http://localhost:3000/api/posts/${postId}`)
}

export const usePostDetails = postId => {

    const queryClient = useQueryClient()

    return useQuery(['post', postId], fetchPost, {
        initialData: () => {
          const post = queryClient.getQueryData('allPosts')?.data?.find(post => post.id === parseInt(postId))
          if (post) {
            return { data: post }
          } else {
            return undefined
          }
        }
    })
}
