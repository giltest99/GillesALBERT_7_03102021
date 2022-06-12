import React from 'react'
import Navigation from './Navigation'
import { Link, useNavigate } from 'react-router-dom'

export default function MyProfile() {

  const navigate = useNavigate()

  return (
    <div>
        <Navigation />
        <main className='container'> 
        
          <h1>Mon profil</h1>
          <article className='container' style={{backgroundColor:'white',padding:'1rem',margin:'0 auto'}}>
            <Link to="/posts">&larr; &nbsp; Retour</Link>

          </article>
        </main>
        
    </div>
  )
}
