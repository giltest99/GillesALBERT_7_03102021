import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import axios from 'axios'
import { getAllPosts } from '../utils/api';
import { useQuery } from "react-query";

/* const client = axios.create({
    baseURL: "http://localhost:3000/api/posts" 
  }) */

export default function Posts() {
    
    /* const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
           let response = await client.get('?_limit=10');
           setPosts(response.data);
           console.log(response.data)
        };
        fetchPost();
     }, []); */

     const { data, error, isLoading, isError, isFetching } = useQuery("allPosts", getAllPosts);
    

    if(isLoading || isFetching) {
        return (
            <>
            <Navigation />
            <h1 style={{textAlign:'center'}}>Chargement...</h1>
            </>
        )
    }
     if (isError) {
        return <span>Error: {error.message}</span>;
    }

  return (
    <>
        <Navigation />
        
        <section className='container'>
            <ul>
                {data.map(post => {
                    return (
                        <li key={post.id} style={{listStyle:'none'}}>
                            <article>
                                <h3 style={{margin:'.5rem 0'}}>{post.title}</h3>
                                <p style={{margin:'.5rem 0'}}>{post.content}</p>
                                <p style={{height:'200px'}}>
                                    <img src={post.attachment} alt="" style={{height:'100%'}} />
                                </p>
                                <p style={{textAlign:'right'}}><a href={`/post/${post.id}`}>Détails</a></p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </section>
        

        
        

    </>
  )
}
