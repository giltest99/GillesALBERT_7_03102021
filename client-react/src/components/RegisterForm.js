import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextError from "./SpanError";
import BackError from "./BackEndError";
import HomePageNav from "./HomePageNav";

export default function Register() {
  document.title = "Groupomania créer un compte";

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const registerSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Minimum de 4 caractères")
      .required("Nom d'utilisateur requis"),
    email: yup
      .string()
      .email("Entrez un email valide")
      .required("Email requis"),
    password: yup
      .string()
      .min(2, "Minimum de 2 caractères")
      .required("Mot de passe requis"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    axios
      .post("http://localhost:3000/api/users/signup", values)
      .then((response) => {
        console.log(response.data);
        resetForm();
        alert(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };

  const resetForm = () => {
    setErrorMessage("");
  };

  return (
    <>
      <HomePageNav />
      <section className="container">
        <article>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <BackError>{errorMessage}</BackError>

              <p>
                <label htmlFor="username">Nom d'utilisateur</label>
                <Field type="text" name="username" autoComplete="off" />
                <ErrorMessage name="username" component={TextError} />
              </p>

              <p>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" />
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

              {/* <p style={{ textAlign: "center" }}>
                <Link to="/">Se connecter</Link>
              </p> */}

              <p className="reset-button-container">
                <button
                  type="reset"
                  className="reset-button"
                  onClick={resetForm}
                >
                  Effacer
                </button>
              </p>
            </Form>
          </Formik>
        </article>
      </section>
    </>
  );
}
