import Navigation from './Navigation'
import { getAllPosts } from '../utils/api';
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';


export default function Posts() {

     const { data, error, isLoading, isError, isFetching } = useQuery("allPosts", getAllPosts, {
      refetchOnMount: true,
      cacheTime: 0
     });

    if(isLoading || isFetching) {
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
        
        <section className='container' style={{maxWidth:'50rem'}}>

        {data.map(({ id, title, content, attachment}) => (

          <article key={id} style={{}}> 

              <figure style={{width:'100%'}}>
                    <img src={attachment} alt="my attachment" style={{width:'100%',objectFit:'cover'}}/>          
              </figure>     
            

              <div style={{width:'100%'}}>
                  <h3 style={{marginBottom:'.5rem'}}>{title}</h3>
                  <small><i>John DOE, le 12/06/2022</i></small>
                  <p style={{border:'none',resize:'none',padding:'1rem 0'}}>{content}</p>
              </div>

              <div className='grid'>
                <p style={{textAlign:'center',margin:'.5rem auto'}}>12</p>
                <p style={{textAlign:'center',margin:'.5rem auto'}}><a href="#">Liker</a></p>
                <p style={{textAlign:'center',margin:'.5rem auto'}}>
                  <Link to={`/posts/${id}`}>Détails</Link>
                </p>
                {/* <p style={{textAlign:'center',margin:'.5rem auto'}}><a href="#">Supprimer</a></p> */}
              </div>

          </article>

        ))}

        </section>
        

        
        

    </>
  )
}
