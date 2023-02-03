import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonIcon } from "./ButtonIcon";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiFillLike, AiOutlineLike } from "react-icons/ai";

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
      border-radius: 1rem;
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
    font-size: 1.5rem !important;
    font-weight: 600;
    color: var(--tertiary);
    margin: 1rem 0 0 0.5rem;
  }
  .post-like {
    border-radius: 0.5rem;
    color: var(--primary);
    margin: 1rem 0 0 0;

    svg {
      height: 2em;
      width: 2em;
    }
  }
  .post-no-like {
    border-radius: 0.5rem;
    color: var(--secondary);
    margin: 1rem 0 0 0;

    svg {
      height: 2em;
      width: 2em;
    }
  }
  .post-like:hover {
    cursor: pointer;
  }
  .post-no-like:hover {
    cursor: pointer;
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
    padding: 0.5rem 0.75rem;
    background-color: seagreen;
    color: white;
    border-radius: 2rem;
    transition: all 0.3s ease;
  }
  .btn-modify:hover {
    background-color: #267347;
  }

  .btn-delete {
    cursor: pointer;
    font-size: 1.25rem;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    background-color: var(--primary);
    color: white;
    border-radius: 2rem;
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
                  <AiFillLike />
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            ) : (
              <div className="post-like-container">
                <p className="post-no-like" onClick={likePost}>
                  <AiOutlineLike />
                </p>
                <p className="post-likes">{postLikes}</p>
              </div>
            )}
            {isAuthor ? (
              <div className="is-author-container">
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
                  title="Modifier"
                >
                  <FiEdit />
                </Link>

                <ButtonIcon modify>Modifier</ButtonIcon>

                <Link
                  onClick={() => deletePost(postId)}
                  className="btn-delete"
                  title="Supprimer"
                >
                  <AiOutlineDelete />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </Article>
    </>
  );
}
