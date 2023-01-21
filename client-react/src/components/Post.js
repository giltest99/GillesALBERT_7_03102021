import styled from "styled-components";
import like from "../assets/like.png";
import notLike from "../assets/no-like.png";

const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: white;
  margin-bottom: 0.75rem;
  font-family: sans-serif;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);

  .main-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    h3 {
      /* background-color: lavender; */
      margin: 0;
      padding: 0.5rem;
    }
    h4 {
      /* background-color: lightcyan; */
      margin: 0;
      padding: 0.5rem;
    }
    p {
      /* background-color: lightblue; */
      margin: 0;
      padding: 0.5rem;
    }
    .post-author {
      font-style: italic;
    }
    .main-post-image {
      width: 100%;
      height: 300px;
      border-radius: 0 0.5rem 0.5rem 0;
      object-fit: contain;
    }
    button {
      margin: 0 0.5rem 0 0.5rem;
    }
  }

  .left-column {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background-color: lightcyan;
  }

  img {
    width: 30px;
  }
  .post-likes {
    font-size: 20px;
    margin-left: 1rem;
  }
  .post-like {
    /* background-color: lightgreen; */
    border-radius: 0.5rem;
    color: blue;
  }
  .post-like:hover {
    cursor: pointer;
    background-color: gainsboro;
  }
  .post-no-like {
    /* background-color: lightpink; */
  }
  .post-no-like:hover {
    cursor: pointer;
    background-color: gainsboro;
    border-radius: 0.5rem;
  }
  .btn-modify:hover {
    color: seagreen;
  }
  .btn-delete:hover {
    color: crimson;
    font-size: 0.5rem;
  }
`;

export default function Post({
  postUserId, // A remplacer par nom de l'auteur
  postId,
  postTitle,
  postContent,
  postName,
  postLikes,
  postLiked,
  onClick,
  imgUrl,
  isAuthor,
  createdAt,
  likePost,
  noLikePost,
  modifyPost,
  deletePost,
}) {
  return (
    <>
      <Article>
        <div className="main-column">
          <h3 className="post-title">{postTitle}</h3>

          <h4 className="post-author">
            Message de {postName}, le {createdAt}
          </h4>

          <p className="post-content">{postContent}</p>

          <div className="right" onClick={onClick}>
            <p>
              {/* Display image & alt if exists */}
              {imgUrl ? (
                <img className="main-post-image" src={imgUrl} alt="Post img" />
              ) : (
                ""
              )}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Conditional like or not like icon */}
            {postLiked ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    display: "flex",
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                  className="post-like"
                  onClick={noLikePost}
                >
                  <img
                    src={like}
                    alt={`Post ${postTitle} liké par ${postName}`}
                    className="like-icon"
                  />
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    display: "flex",
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                  className="post-no-like"
                  onClick={likePost}
                >
                  <img
                    src={notLike}
                    /* alt="Post non liké" */
                    alt={`Post ${postTitle} non liké par ${postName}`}
                    className="like-icon"
                  />
                </p>
                <p className="post-likes">{postLikes}</p>
                {/* <p className="post-likes">{`Liké ${postLikes} fois`}</p> */}
              </div>
            )}
            {/* Conditional display if isAuthor */}
            {isAuthor ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <button
                  onClick={() => modifyPost(postId)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.25rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="btn-modify"
                  title="Modifier"
                >
                  &#9997;
                </button>

                <button
                  onClick={() => deletePost(postId)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.25rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="btn-delete"
                  title="Supprimer"
                >
                  &#10005;
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Article>
    </>
  );
}
