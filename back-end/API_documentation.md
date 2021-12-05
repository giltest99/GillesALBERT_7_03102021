# Groupomania API documentation

# USERS
http://localhost:3000/api/users

##  Login
POST http://localhost:3000/api/users/login
```json
{
    "email": "john.doe@gmail.com",
    "password": "123"
}
```
## Signup, create new user
POST http://localhost:3000/api/users/signup
```json
{
    "email": "john.doe@gmail.com",
    "password": "123",
    "username": "John DOE"
}
```
## Select all users
GET http://localhost:3000/api/users

## Select one user by id
GET http://localhost:3000/api/users/id/1

## Delete user by id
POST http://localhost:3000/api/users/4

# POSTS

## Select all posts
GET http://localhost:3000/api/posts

## Select one post by id
GET http://localhost:3000/api/posts/1

## Create post
POST http://localhost:3000/api/posts
```json
{
    "title": "Hello my post !",
    "content": "Content of my fabulous post",
    "attachment": "url",
    "user_id": "1"
}
```
## Delete post
DELETE http://localhost:3000/api/posts/20

# COMMENTS
## Select all comments
GET http://localhost:3000/api/comments

## Select one comment
GET http://localhost:3000/api/comments/1

## Create comment
POST http://localhost:3000/api/comments
```json
{
    "user_id": "3",
    "content": "Another amazing comment !",
    "post_id": "1"
}
```
## Delete comment
DELETE  http://localhost:3000/api/comments/


# POSTS LIKED

## Select a post and return the number of likes
GET http://localhost:3000/api/postlikes/1

## Like a post
POST http://localhost:3000/api/postlikes
```json
{
    "user_id": "1",
    "post_id": "12"
}
```
## Delete post liked
DELETE http://localhost:3000/api/postlikes/5


# POSTS DISLIKED

## Select a post and return the number of dislikes
GET http://localhost:3000/api/postdislikes/1

## Dislike a post
POST http://localhost:3000/api/postdislikes
```json
{
    "user_id": "1",
    "post_id": "12"
}
```
## DELETE post dislike
DELETE  http://localhost:3000/api/postdislikes/4

# COMMENT LIKED

##  Select a comment and return the number of likes
GET http://localhost:3000/api/commentlikes/2

## Like a comment
POST http://localhost:3000/api/commentlikes
```json
{
    "user_id": "1",
    "comment_id": "1"
}
```
## Delete comment like
DELETE  http://localhost:3000/api/commentlikes/

# COMMENT DISLIKED

## Select a comment and return the number of dislikes
GET http://localhost:3000/api/commentdislikes/2

## Dislike a comment
POST http://localhost:3000/api/commentdislikes
```json
{
    "user_id": "1",
    "comment_id": "1"
} 
```
## Delete a comment dislike
DELETE http://localhost:3000/api/commentdislikes/3
