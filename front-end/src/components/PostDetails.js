import React from 'react'
import Navigation from './Navigation'
import { useQueryClient } from 'react-query'

export default function PostDetails() {

  const queryClient = useQueryClient()
  

  return (
    <div>
        <Navigation />
        <section className='container'>
            <h1 style={{margin:'1rem 0'}}>Détails d'un post</h1>
            <article>
                <form>
                    <label htmlFor="title">Titre du post</label>
                    <input type="text" value='Mon titre' name='title' />
                    <label htmlFor="content">Contenu du post</label>
                    <textarea name="content">Mon contenu</textarea>
                    <label htmlFor="file">Ajouter une image</label>
                    <input type="file" />
                    <button>Modifier le post</button>
                </form>
            </article>

        </section>
        
    </div>
  )
}
