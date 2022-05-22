import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextError from './SpanError';
import GroupoLogo from '../assets/mono-groupo.svg'


const initialValues={
  username: '',
  email: '',
  password: ''
}

const registerSchema = yup.object().shape({
  username: yup.string().min(4, 'Minimum de 4 caractères').required('Nom d\'utilisateur requis'),
  email: yup.string().email('Entrez un email valide').required('Email requis'),
  password: yup.string().min(2, 'Minimum de 2 caractères').required('Mot de passe requis')
})

const handleSubmit = (values, {resetForm}) => {
  console.log(values)
  axios.post('http://localhost:3000/api/users/signup', values)
  .then(response => {
    console.log(response.data);
    alert(response.data.message);
    })
  .catch(error => {
    console.log(error);
    alert(error)
  })
  resetForm();
}

export default function Register() {
  document.title = 'Groupomania créer un compte'
  return (
    <>

      <section className='container'> 
        <article>

          <p style={{display:'flex',justifyContent:'center'}}>
            <img src={GroupoLogo} alt="logo groupomania" />
          </p>

        <Formik 
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        >
            
          <Form>

            <p>
            <label htmlFor="username">Nom d'utilisateur</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component={TextError} />
            </p>
            
            <p>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email"  />
            <ErrorMessage name="email" component={TextError} />
            </p>
            
            <p>
            <label htmlFor="password">Mot de passe</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component={TextError} />
            </p>
            
            <p>
            <button type="submit">Créer un compte</button>
            </p>

            <p style={{textAlign:'center'}}>
              <Link to="/" >Se connecter</Link>
            </p>

          </Form>

            
        </Formik>

        </article>
      </section>

    </>
  )
}
