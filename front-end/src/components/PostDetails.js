import React from 'react'
import Navigation from './Navigation'
import {useParams, useNavigate, Link} from 'react-router-dom'
import { usePostDetails } from '../hooks/usePostDetails';


export default function PostDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, data, isError, error } = usePostDetails(id)

  
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
        <Navigation />
        <section className='container'>
          <article>
            {/* {JSON.stringify(data)}  */}
            <Link to="/posts">&larr; &nbsp; Retour</Link>
            <h1 style={{margin:'0'}}>{data.data.title}</h1>
            <p>{data.data.content}</p>
            <img src={data.data.attachment} alt="img" style={{width:'100%'}}/>
            
          </article>

        </section>
        
    </div>
  )
}
