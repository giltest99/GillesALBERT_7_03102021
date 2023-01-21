import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { updatePost } from "../api/postsApi";
import styled from "styled-components";
import Navigation from "./Navigation";

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;

export default function UpdatePost() {
  const params = useParams();
  /* console.log(params); */
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const obj = async () => {
    return await axios
      .get(`http://localhost:3000/api/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    obj();
  }, []);

  const formik = useFormik({
    initialValues: {
      user_id: post.user_id,
      title: post.title,
      content: post.content,
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
      //console.log(values);

      const formData = new FormData();
      //console.log(formData);

      for (let value in values) {
        formData.append(value, values[value]);
      }

      //console.log(formData);

      axios
        .put(`http://localhost:3000/api/posts/${obj.id}`, formData)
        .then((res) => {
          setPost(post.concat(res.data));
          alert("Post enregistré");
          //console.log(post);
        });

      resetForm({});
      navigate("/posts");
    },
  });

  return (
    <>
      <Navigation />
      <Main>
        <article
          className="container"
          style={{
            backgroundColor: "white",
            padding: "1rem",
            margin: "0 auto",
          }}
        >
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <h1 style={{ marginBottom: ".5rem" }}>Modifier un message</h1>
            <div style={{ display: "none" }}>
              <label>User ID</label>
              <br />
              <input
                autoFocus
                type="text"
                name="user_id"
                onChange={formik.handleChange}
                value={post.user_id}
              />
            </div>

            <div>
              <label>Titre</label>
              <br />
              <input
                type="text"
                name="title"
                onChange={formik.handleChange}
                value={post.title}
              />
            </div>

            <div>
              <label>Content</label>
              <br />
              <textarea
                name="content"
                onChange={formik.handleChange}
                value={post.content}
              />
            </div>

            <div>
              <label>Upload File</label>
              <br />
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
            <img src={post.attachment} alt="" />
            <br />

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {/* <p>
            <Link to="/posts">Retour aux posts</Link>
          </p> */}
        </article>
      </Main>
    </>
  );
}
