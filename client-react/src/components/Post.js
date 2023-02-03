import { Link } from "react-router-dom";
import styled from "styled-components";
import like from "../assets/like.png";
import notLike from "../assets/no-like.png";
import { ButtonIcon } from "./ButtonIcon";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: white;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.25rem;
  color: var(--tertiary);

  .main-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    .text-container {
      display: flex;
      flex-direction: column;
      padding: 1rem 1.5rem;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .post-author {
      font-style: italic;
    }
    .image-container {
      display: flex;
      justify-content: center;
      margin: 1rem 0;
    }
    .main-post-image {
      max-width: 96%;
      border-radius: 0.5rem;
      object-fit: contain;
      padding: 0.5rem;
    }
    button {
      margin: 0 0.25rem 0 0.25rem;
    }
  }

  .like-icon {
    width: 2rem;
  }

  .main-like-edit-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem 0;
  }

  .post-like-container {
    display: flex;
    align-items: center;
  }

  .post-likes {
    font-size: 20px;
    margin: 1rem 0 0 0.5rem;
  }
  .post-like,
  .post-no-like {
    border-radius: 0.5rem;
    color: blue;
    margin: 1rem 0 0 0;
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
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem;
    background-color: seagreen;
    color: white;
    border: 1px solid grey;
    /* border-radius: 2rem; */
    transition: all 0.3s ease;
  }
  .btn-modify:hover {
    background-color: #267347;
  }

  .btn-delete {
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem;
    background-color: var(--primary);
    color: white;
    border: 1px solid grey;
    /* border-radius: 2rem; */
    transition: all 0.3s ease;
  }

  .btn-delete:hover {
    background-color: var(--primary-hover);
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
          <div className="text-container">
            <h1 className="post-title">{postTitle}</h1>

            <h2 className="post-author">
              Message de {postName}, le {createdAt}
            </h2>

            <p className="post-content">{postContent}</p>
          </div>

          <div onClick={onClick}>
            {imgUrl ? (
              <a href={imgUrl} target="_blank" rel="noopenner noreferrer">
                <div className="image-container">
                  <img
                    className="main-post-image"
                    src={imgUrl}
                    alt="Post img"
                  />
                </div>
              </a>
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
                <button title="Modifier">
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
                    <FiEdit />
                  </Link>
                </button>

                <ButtonIcon modify>Modifier</ButtonIcon>

                <button
                  onClick={() => deletePost(postId)}
                  className="btn-delete"
                  title="Supprimer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Article>
    </>
  );
}
