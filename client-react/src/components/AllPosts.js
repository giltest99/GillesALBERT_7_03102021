import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Post from "./Post";
import formatDate from "../utils/formatDate";
import styled from "styled-components";

const Main = styled.main`
  @media screen and (max-width: 1000px) {
    padding: 0 0.33rem;
  }
`;

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [likes, setLikes] = useState([]);
  const [connectedUser, setConnectedUser] = useState({});

  const [newPosts, setNewPosts] = useState([]);

  const getAllUsers = () => {
    axios.get("http://localhost:3000/api/users").then((res) => {
      setUsers(res.data);
      //console.log(res.data);
    });
  };

  const getAllPosts = () => {
    axios.get("http://localhost:3000/api/posts").then((res) => {
      setPosts(res.data);
      //console.log(res.data);
    });
  };

  const getAllLikes = () => {
    axios.get("http://localhost:3000/api/postlikes").then((res) => {
      setLikes(res.data);
      //console.log(res.data);
    });
  };

  useEffect(() => {
    const loggued = JSON.parse(localStorage.getItem("_auth_state"));
    setConnectedUser(loggued);
    //console.log("Connected user", loggued);
  }, []);

  useEffect(() => {
    getAllPosts();
    getAllUsers();
    getAllLikes();
  }, []);

  useEffect(() => {
    async function addPostUser() {
      const myPosts = [...posts];
      const myUsers = [...users];
      const myLikes = [...likes];

      const myNewPosts = myPosts.map((e) => {
        // Find username
        /* const findUserName = myUsers.find((el) => el.id === e.user_id)
        e.userName = findUserName.username; */

        // eslint-disable-next-line array-callback-return, no-unused-vars
        const myNewUsers = myUsers.find((el) => {
          if (el.id === e.user_id) e.userName = el.username;
        });

        // Number of likes by post
        const numberOfLikes = myLikes.filter((el) => el.post_id === e.id);
        e.likes = numberOfLikes.length;

        // Is author of the post ?
        if (
          e.user_id === connectedUser.userId ||
          connectedUser.isAdmin === true
        ) {
          e.isAuthor = true;
        } else {
          e.isAuthor = false;
        }

        // Liked this post ?
        const likedThisPost = myLikes.filter(
          (el) => el.post_id === e.id && el.user_id === connectedUser.userId
        );
        e.liked = likedThisPost.length;

        // Find like id
        const postLikeId = myLikes.find(
          (el) => el.post_id === e.id && el.user_id === connectedUser.userId
        );
        if (postLikeId) e.likeId = postLikeId.id;
        else e.likeId = 0;

        return e;
      });
      //console.log("myNewPosts", myNewPosts);
      //console.log(myNewPosts);
      setNewPosts(myNewPosts);
    }
    addPostUser();
  }, [posts, users, likes, connectedUser]);

  function deleteThisPost(id) {
    let result = window.confirm("Voulez-vous supprimer le post ?");

    if (result === true) {
      axios.delete(`http://localhost:3000/api/posts/${id}`).then(() => {
        //console.log("Post supprimé");
        getAllPosts();
        getAllUsers();
        getAllLikes();
      });
    } else {
      return;
    }
  }

  function likeThisPost(postId) {
    const likePostId = postId;
    const likeUserId = connectedUser.userId;
    const obj = {
      user_id: likeUserId,
      post_id: likePostId,
    };
    //console.log(obj);
    axios.post(`http://localhost:3000/api/postlikes`, obj).then(() => {
      //console.log("Post liké");
      getAllPosts();
      getAllUsers();
      getAllLikes();
    });
  }
  function noLikeThisPost(id) {
    axios.delete(`http://localhost:3000/api/postlikes/${id}`).then(() => {
      //console.log("Post disliké");
      getAllPosts();
      getAllUsers();
      getAllLikes();
    });
  }

  // Refresh data every 60 sec
  useEffect(() => {
    const interval = setInterval(() => {
      getAllPosts();
      getAllUsers();
      getAllLikes();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Main>
        <section>
          {newPosts &&
            newPosts.map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                postTitle={post.title}
                postContent={post.content}
                createdAt={formatDate(post.createdAt)}
                imgUrl={post.attachment}
                postUserId={post.user_id}
                postName={post.userName}
                postLiked={post.liked}
                postLikes={post.likes}
                isAuthor={post.isAuthor}
                likePost={() => likeThisPost(post.id)}
                noLikePost={() => noLikeThisPost(post.likeId)}
                /* modifyPost={() => alert(`Modifier ${post.id}`)} */
                /* modifyPost={() => navigate(`/update-post/${post.id}`)} */
                deletePost={() => deleteThisPost(post.id)}
              />
            ))}
        </section>
      </Main>
    </>
  );
}
