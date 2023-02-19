# Groupomania API documentation

# USERS
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

## Select user by id
GET http://localhost:3000/api/users/1

## Update user
UPDATE http://localhost:3000/api/users/1
```json
{
    "email": "john.doe@gmail.com",
    "password": "123",
    "username": "John DOE",
    "avatar": "Avatar url",
    "biography": "Modified biography"
}
```
## Delete user by id
DELETE http://localhost:3000/api/users/4

# POSTS
POST http://localhost:3000/api/posts

## Select all posts (default order DESC)
GET http://localhost:3000/api/posts

## Select post by id
GET http://localhost:3000/api/posts/1

## Create post
POST http://localhost:3000/api/posts
```json
{
    "user_id": "1",
    "title": "Title of the post !",
    "content": "Content of the post",
    "attachment": "url of the media post"
}
```
## Update post
PUT http://localhost:3000/api/posts
```json
{
    "user_id": "5",
    "title": "Title of the post !",
    "content": "Content of the post",
    "attachment": "url of the media post"
}
```
## Delete post
DELETE http://localhost:3000/api/posts/20


# POSTS LIKED
POST http://localhost:3000/api/postlikes

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
## Delete a post liked
DELETE http://localhost:3000/api/postlikes/5
