import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addPost } from "../api/postsApi";
import styled from "styled-components";
import Navigation from "./Navigation";

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;

  label {
    display: block;
  }
  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.75rem;
  }
`;

export default function CreatePost() {
  const [posts, setPosts] = useState([]);
  const queryClient = useQueryClient();

  const addPostMutation = useMutation(addPost, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("posts");
    },
  });

  const navigate = useNavigate();
  const LS = JSON.parse(localStorage.getItem("_auth_state"));
  const connectedUser = LS.userId;
  const url = "http://localhost:3000/api/posts";
  const formik = useFormik({
    initialValues: {
      user_id: connectedUser,
      title: "",
      content: "",
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
      //console.log(values);

      const formData = new FormData();
      console.log(formData);

      for (let value in values) {
        formData.append(value, values[value]);
        console.log(value, values[value]);
      }

      axios.post(url, formData).then((res) => {
        setPosts(posts.concat(res.data));
        console.log(res.data);
        alert(res.data.message);
        navigate("/posts");
      });

      // id, user_id, title, content, attachment, createdAt
      /* addPostMutation.mutate({
        user_id: values.user_id,
        title: values.title,
        content: values.content,
        image: values.image,
      }); */
      //resetForm({});
      //navigate("/posts");
    },
  });

  return (
    <>
      <Main>
        <Navigation />
        {/* <article
          className="container"
          style={{
            backgroundColor: "white",
            padding: "1rem",
            margin: "0 auto",
          }}
        > */}
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <h1 style={{ marginBottom: ".5rem" }}>Ecrire un message</h1>
          {/* <button onClick={() => navigate("/posts")}>Retour aux posts</button> */}
          <div style={{ display: "none" }}>
            <label>User ID</label>
            {/* <br /> */}
            <input
              autoFocus
              type="text"
              name="user_id"
              onChange={formik.handleChange}
              value={formik.values.user_id}
            />
          </div>

          <div>
            <label>Titre</label>
            {/* <br /> */}
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <div>
            <label>Content</label>
            {/* <br /> */}
            <textarea
              /* type='text' */
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
            />
          </div>

          <div>
            <label>Upload File</label>
            {/* <br /> */}
            <input
              type="file"
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
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* </article> */}
      </Main>
    </>
  );
}
