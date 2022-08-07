import Navigation from "./Navigation";
import { getAllPosts } from "../utils/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Posts() {
  const { data, error, isLoading, isError, isFetching } = useQuery(
    "allPosts",
    getAllPosts,
    {
      refetchOnMount: true,
      cacheTime: 0,
    }
  );

  if (isLoading || isFetching) {
    return (
      <>
        <Navigation />
        <h1 style={{ textAlign: "center" }}>Chargement...</h1>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Navigation />
        <h1 style={{ textAlign: "center" }}>Error: {error.message}</h1>
      </>
    );
  }

  const displayDate = (myDate) => {
    const d = new Date(myDate);
    return d.toLocaleDateString();
  };

  return (
    <>
      <Navigation />

      <section className="container" style={{ maxWidth: "50rem" }}>
        {data.map(({ id, user_id, title, content, attachment, createdAt }) => (
          <article key={id} style={{}} className="grid">
            <div style={{}}>
              <figure style={{ height: "10rem" }}>
                <img
                  src={attachment}
                  alt="my attachment"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    height: "100%",
                  }}
                />
              </figure>
              <div className="grid">
                <p style={{ textAlign: "center", margin: ".5rem auto" }}>12</p>
                <p style={{ textAlign: "center", margin: ".5rem auto" }}>
                  <a href="#">Liker</a>
                </p>
                <p style={{ textAlign: "center", margin: ".5rem auto" }}>
                  <Link to={`/posts/${id}`}>Détails</Link>
                </p>
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <h3 style={{ marginBottom: ".5rem" }}>{title}</h3>
              <small>
                <i>
                  {`User id : ${user_id}`},<br /> le {displayDate(createdAt)}
                </i>
              </small>
              <p
                style={{
                  border: "none",
                  resize: "none",
                  padding: "1rem 0",
                  textAlign: "justify",
                }}
              >
                {content}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
