import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";

const Main = styled.main`
  background-color: #fff;

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
    onSubmit: (values /* , { resetForm } */) => {
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
    },
  });

  return (
    <>
      <Navigation />
      <Main>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <h1 style={{ marginBottom: ".5rem" }}>Ecrire un message</h1>
          <div style={{ display: "none" }}>
            <label>User ID</label>
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
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <div>
            <label>Content</label>
            <textarea
              /* type='text' */
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
            />
          </div>

          <div>
            <label>Upload File</label>
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
