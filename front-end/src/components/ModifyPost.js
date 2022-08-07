import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { updatePost } from "../api/postsApi";

export default function UpdatePostPage() {
  // id, user_id, title, content, attachment, createdAt
  const location = useLocation();
  const obj = location.state;
  console.log(obj);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const queryClient = useQueryClient();
  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("posts");
    },
  });

  const url = `http://localhost:3000/api/posts/${obj.id}`;

  const formik = useFormik({
    initialValues: {
      user_id: obj.user_id,
      title: obj.title,
      content: obj.content,
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

      axios.put(url, formData).then((res) => {
        setPosts(posts.concat(res.data));
        //alert("Post enregistré");
        console.log(posts);
      });

      resetForm({});
      //navigate("/posts");
    },
  });

  return (
    <>
      <article
        className="container"
        style={{ backgroundColor: "white", padding: "1rem", margin: "0 auto" }}
      >
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          {/* <Link to="/posts">&larr; &nbsp; Retour</Link> */}
          <h1 style={{ marginBottom: ".5rem" }}>Modifier un message</h1>
          {/* <div style={{ display: "none" }}>
            <label>User ID</label>
            <br />
            <input
              autoFocus
              type="text"
              name="user_id"
              onChange={formik.handleChange}

              value={obj.user_id}
            />
          </div> */}

          <div>
            <label>Titre</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <div>
            <label>Content</label>
            <br />
            <textarea
              /* type='text' */
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content.replace(/(?:\r\n|\r|\n)/g, "\n")}
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
            <img src={obj.attachment} alt="" />
          </div>
          <br />

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          <Link to="/posts">Retour aux posts</Link>
        </p>
      </article>
    </>
  );
}
