import { Link } from "react-router-dom";
import styled from "styled-components";
import like from "../assets/like.png";
import notLike from "../assets/no-like.png";

const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: white;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
  color: var(--tertiary);

  .main-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      margin: 0;
      padding: 0.5rem;
    }
    h4 {
      margin: 0;
      padding: 0.5rem;
    }
    p {
      margin: 0;
      padding: 0.5rem;
      margin: 1rem 0;
    }
    .post-author {
      font-style: italic;
    }
    .main-post-image {
      width: 100%;
      max-height: 400px;
      border-radius: 0 0.5rem 0.5rem 0;
      object-fit: contain;
    }
    button {
      margin: 0 0.5rem 0 0.5rem;
    }
  }

  .like-icon {
    width: 30px;
  }

  .main-like-edit-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .post-like-container {
    display: flex;
    align-items: center;
  }

  .post-likes {
    font-size: 20px;
    margin-left: 1rem;
  }
  .post-like {
    border-radius: 0.5rem;
    color: blue;
  }
  .post-like:hover {
    cursor: pointer;
    background-color: gainsboro;
  }
  .post-no-like:hover {
    cursor: pointer;
    background-color: gainsboro;
    border-radius: 0.5rem;
  }
  .is-author-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .btn-modify {
    display: inline-block;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    color: var(--tertiary);
  }
  .btn-modify:hover {
    color: seagreen;
  }

  .btn-delete {
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  .btn-delete:hover {
    color: crimson;
  }
`;

export default function Post({
  postUserId,
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

          <div onClick={onClick}>
            {imgUrl ? (
              <div>
                <a href={imgUrl} target="_blank" rel="noopenner noreferrer">
                  <img
                    className="main-post-image"
                    src={imgUrl}
                    alt="Post img"
                  />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="main-like-edit-container">
            {postLiked ? (
              <div className="post-like-container">
                <p className="post-like" onClick={noLikePost}>
                  <img
                    src={like}
                    alt={`Post ${postTitle} liké par ${postName}`}
                    className="like-icon"
                  />
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            ) : (
              <div className="post-like-container">
                <p className="post-no-like" onClick={likePost}>
                  <img
                    src={notLike}
                    alt={`Post ${postTitle} non liké`}
                    className="like-icon"
                  />
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            )}
            {isAuthor ? (
              <div className="is-author-container">
                <button>
                  <Link
                    to={`/update-post/${postId}`}
                    state={{
                      id: postId,
                      userId: postUserId,
                      title: postTitle,
                      content: postContent,
                      imgUrl: imgUrl,
                    }}
                    className="btn-modify"
                  >
                    Modifier
                  </Link>
                </button>

                <button
                  onClick={() => deletePost(postId)}
                  className="btn-delete"
                  title="Supprimer"
                >
                  Supprimer
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Article>
    </>
  );
}
