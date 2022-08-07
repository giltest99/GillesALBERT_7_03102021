import { useState } from "react";
import Navigation from "./Navigation";
import { useParams, useNavigate, Link } from "react-router-dom";
import { usePostDetails } from "../hooks/usePostDetails";
import axios from "axios";

export default function PostDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data, isError, error } = usePostDetails(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  function deletePost() {
    axios.delete(`http://localhost:3000/api/posts/${data.data.id}`)
    .then(() => {
      console.log("Post supprimé");
      navigate("/posts");
    })
    .catch(() => {
      alert("Une erreur s'est produite");
      navigate("/posts");
    });
  }

  return (
    <div>
      <Navigation />
      <section className="container">
        <article>
          {/* {JSON.stringify(data)}  */}
          <Link to="/posts">&larr; &nbsp; Retour</Link>
          <h1 style={{ margin: "0" }}>{data.data.title}</h1>
          <p>{data.data.content}</p>
          <img src={data.data.attachment} alt="img" style={{ width: "100%" }} />
          <div className="grid">
            <button>Modifier</button>
            <button onClick={deletePost}>Supprimer</button>
          </div>
        </article>
      </section>
    </div>
  );
}
