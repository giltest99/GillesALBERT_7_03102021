import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import { getAllPosts } from '../utils/api';
import { useQuery } from "react-query";



export default function Posts() {

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
        
        return (
            <>
            <Navigation />
            <h1 style={{textAlign:'center'}}>Error: {error.message}</h1>
            </>
        )       
    }

  return (
    <>
        <Navigation />
        
        <section className='container'>
        {data.map(({ id, title, content, attachment}) => (
          <article key={id}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{content}</p>
              <p>
                  <figure>
                      <img src={attachment} alt="my attachment"/>
                  </figure>
              </p>
          </article>
        ))}
        </section>
        

        
        

    </>
  )
}
