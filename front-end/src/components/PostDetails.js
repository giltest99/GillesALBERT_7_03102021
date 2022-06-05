import React from 'react'
import Navigation from './Navigation'

export default function PostDetails() {
  return (
    <div>
        <Navigation />
        <section className='container'>
            <h1 style={{margin:'1rem 0'}}>Détails d'un post</h1>
            <article>
                <form>
                    <label htmlFor="title">Titre du post</label>
                    <input type="text" value='' name='title' />
                    <label htmlFor="content">Contenu du post</label>
                    <textarea name="content"></textarea>
                    <label htmlFor="file">Ajouter une image</label>
                    <input type="file" />
                    <button>Modifier le post</button>
                </form>
            </article>

        </section>
        
    </div>
  )
}
