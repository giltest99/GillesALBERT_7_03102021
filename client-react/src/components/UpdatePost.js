import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";

const Main = styled.main`
  background-color: #fff;
  padding: 1rem 0.5rem 4rem;
  @media screen and (max-width: 1000px) {
    padding: 1rem 0.5rem 4rem;
  }

  button {
    padding: 1rem;
  }
`;

const Form = styled.form`
  max-width: 40rem;
  margin: 2rem auto;
  /* border: 1px solid purple; */
`;

const H1 = styled.h1`
  margin: 0 auto 2rem;
  color: var(--tertiary);
`;

const Label = styled.label`
  display: block;
  font-size: 1.25em;
  color: var(--tertiary);
`;

const InputText = styled.input.attrs({
  type: "text",
  autoComplete: "off",
})`
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid rgb(0, 0, 0, 0.2);
  min-height: 30vh;
  resize: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1.5em;
  font-family: Lato, sans-serif;
  &:focus {
    outline: none;
    border: 1px solid var(--primary);
  }
`;

const Button = styled.button`
  min-width: 6rem;
  margin-right: 1rem;
  color: var(--tertiary);
  &:hover {
    cursor: pointer;
    color: var(--primary);
  }
`;

export default function CreatePost() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("id",id);

  const titleRef = useRef();

  const post = (id) => {
    return axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        /* console.log(res.data); */
        setSelectedPost(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    post(id);
  }, [id]);

  console.log("Post",selectedPost);

  const url = "http://localhost:3000/api/posts";
  const formik = useFormik({
    initialValues: {
      user_id: "",
      title: "",
      content: "",
      image: "",
    },
    onSubmit: (values /* , { resetForm } */) => {
      //console.log(values);

      const formData = new FormData();
      //console.log(formData);

      for (let value in values) {
        formData.append(value, values[value]);
        //console.log(value, values[value]);
      }

      axios.post(url, formData).then((res) => {
        setPosts(posts.concat(res.data));
        //console.log(res.data);
        //alert(res.data.message);
        navigate("/posts");
      });
    },
  });

  return (
    <>
      <Navigation />
      <Main>
        <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <H1>Modifier un message</H1>
          <div>
            <Label htmlFor="title">Titre</Label>
            <InputText
              type="text"
              name="title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              required
              autoFocus
              ref={titleRef}
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <TextArea
              id="content"
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
            />
          </div>

          <div>
            <Label htmlFor="image">Télécharger un fichier</Label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) =>
                formik.setFieldValue("image", e.currentTarget.files[0])
              }
              style={{ color: "blue" }}
            />
          </div>
          <br />

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Main>
    </>
  );
}
