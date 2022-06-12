import React from 'react'
import Navigation from './Navigation'
import {useParams} from 'react-router-dom'
import axios from 'axios';


export default function PostDetails() {

  
  

  return (
    <div>
        <Navigation />
        <section className='container'>
            <h1 style={{margin:'1rem 0'}}>Détails d'un post</h1>
            <article>
            
            </article>

        </section>
        
    </div>
  )
}
