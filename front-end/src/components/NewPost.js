import React, {useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios'
import Navigation from './Navigation';
import { Link, useNavigate } from 'react-router-dom'; 

import { useQuery, useMutation, useQueryClient } from "react-query"


export default function NewPost() {

    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const url = 'http://localhost:3000/api/posts/';
    const formik = useFormik({
    initialValues: {
      user_id: '',
      title: '',
      content: '',
      image: '',
    },
    onSubmit: (values, {resetForm}) => {
      //console.log(values);

      const formData = new FormData();
      //console.log(formData);

      for (let value in values) {
        formData.append(value, values[value]);
        //console.log(value, values[value])
      }

      axios.post(url, formData).then((res) => {
        setPosts(posts.concat(res.data));
      });


      resetForm({})
      navigate('/posts')
    }
  });
  return (
      <>
    <Navigation />
      <article className='container' style={{backgroundColor:'white',padding:'1rem',margin:'0 auto'}}>
      
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <Link to="/posts">&larr; &nbsp; Retour</Link>
      <h1 style={{marginBottom:'.5rem'}}>Ecrire un message</h1>
      <div>
        <label>User ID</label>
        <br />
        <input
          autoFocus
          type='text'
          name='user_id'
          onChange={formik.handleChange}
          value={formik.values.user_id}
        />
      </div>

      <div>
        <label>Titre</label>
        <br />
        <input
          type='text'
          name='title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>

      <div>
        <label>Content</label>
        <br />
        <textarea
          /* type='text' */
          name='content'
          onChange={formik.handleChange}
          value={formik.values.content}
        />
      </div>

      <div>
        <label>Upload File</label>
        <br />
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={(e) =>
            formik.setFieldValue('image', e.currentTarget.files[0])
          }
          style={{color:'blue'}}
        />
      </div>
      <br />

      <div>
        <button type='submit'>Submit</button>
      </div>
      

    </form>
    </article>
    </>
  )
}
