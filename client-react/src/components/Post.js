import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import like from "../assets/like.png";
import notLike from "../assets/no-like.png";

const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: white;
  margin-bottom: 1rem;
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
  }

  img {
    width: 30px;
  }
  .post-likes {
    font-size: 20px;
    margin-left: 1rem;
  }
  .post-like {
    background-color: lightgreen;
  }
  .post-like:hover {
    cursor: pointer;
    background-color: gainsboro;
  }
  .post-no-like {
    background-color: lightpink;
  }
  .post-no-like:hover {
    cursor: pointer;
    background-color: gainsboro;
  }
  .btn-modify:hover {
    color: seagreen;
  }
  .btn-delete:hover {
    color: crimson;
  }
`;

export default function Post({
  postId,
  /* postUserId, // A remplacer par nom de l'auteur */
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
/*   const [myLike, setMyLike] = useState(false);
  const toggleMyLike = () => {
    setMyLike(!myLike);
    postLiked = myLike;
  }; */

  return (
    <>
      <Article>
        <div className="main-column">
          <h3 className="post-title">{postTitle}</h3>

          {/* <h4 className="post-author">
            Message de {postName}, le {createdAt}
          </h4> */}

          <h4 className="post-author">
            {/* Message de {postUserId}, le {createdAt} */}
            Message de {postName}, le {createdAt}
          </h4>

          <p className="post-content">{postContent}</p>

          <div className="right" onClick={onClick}>
            <p>
              {/* <a href={imgUrl} target="_blank" rel="noreferrer"> */}
              <img className="main-post-image" src={imgUrl} alt="alt" />
              {/* </a> */}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {postLiked ? (
              <div>
                <p
                  style={{
                    display: "flex",
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                  className="post-like"
                  onClick={noLikePost}
                >
                  <img src={like} alt="Post liké" className="like-icon" />

                  {/* <span className="post-likes">{postLikes}</span> */}
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            ) : (
              <div>
                <p
                  style={{
                    display: "flex",
                    padding: "0.5rem",
                    margin: "0.5rem",
                  }}
                  className="post-no-like"
                  onClick={likePost}
                >
                  {/* <span style={{ color: "red" }}>{postLiked}</span> */}

                  <img
                    src={notLike}
                    alt="Post non liké"
                    className="like-icon"
                  />

                  {/* <span className="post-likes">{postLikes}</span> */}
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            )}
            {isAuthor ? (
              <p
                style={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "flex-start",
                }}
              >
                <button
                  onClick={modifyPost}
                  style={{
                    cursor: "pointer",
                    fontSize: "2rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="btn-modify"
                >
                  &#9997;
                </button>
                <button
                  onClick={deletePost}
                  style={{
                    cursor: "pointer",
                    fontSize: "2rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="btn-delete"
                >
                  &#10005;
                </button>
              </p>
            ) : null}
          </div>
        </div>

        <br />
      </Article>
    </>
  );
}
