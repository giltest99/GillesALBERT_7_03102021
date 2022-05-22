import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import TextError from './SpanError';
import GroupoLogo from '../assets/mono-groupo.svg'
import BackError from './BackEndError';





export default function Login() {
  document.title = 'Groupomania se connecter'

  const [errorMessage, setErrorMessage] = useState('')

  const initialValues = {
    email: '',
    password: ''
  }
  
  const loginSchema = yup.object().shape({
    email: yup.string().email('Entrez un email valide').required('Email requis'),
    password: yup.string().min(2, 'Minimum 2 caractères').required('Mot de passe requis')
  })
  
  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    axios.post('http://localhost:3000/api/users/login', values)
    .then(response => {
      console.log(response.data)
      localStorage.setItem('data',JSON.stringify(response.data))
      setErrorMessage('')
      resetForm();
    })
    .catch(error => {
      console.log(error.response.data.message)
      setErrorMessage(error.response.data.message)
    })
    
  }

  return (
    <>

    <section className='container'>
    
      <article>

        <p style={{display:'flex',justifyContent:'center'}}>
          <img src={GroupoLogo} alt="logo groupomania" />
        </p>
        

        <Formik 
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        >
            
          <Form>

            <BackError>{errorMessage}</BackError>

            <p>
              <label htmlFor="email">Email</label>
              <Field type="text" name="email"  />
              <ErrorMessage name="email" component={TextError}/>
            </p>
            
            <p>
              <label htmlFor="password">Mot de passe</label>
              <Field type="password" name="password"  />
              <ErrorMessage name="password" component={TextError}/>
            </p>
            
            <p>
              <button type="submit">Se connecter</button>
            </p>

            <p style={{textAlign:'center'}}>
              <Link to="register" >Créer un compte</Link>
            </p>
            
          </Form>

            
        </Formik>
        
      </article>
    </section>
    
    </>
  )
}
