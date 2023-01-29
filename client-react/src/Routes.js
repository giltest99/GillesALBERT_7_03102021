import React from "react";
import { RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import AllPosts from "./components/AllPosts";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
/* import ErrorPage from "./components/ErrorPage"; */

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<RegisterForm />} />
        <Route
          path={"/posts"}
          element={
            <RequireAuth loginPath={"/login"}>
              <AllPosts />
            </RequireAuth>
          }
        />
        <Route
          path={"/create-post"}
          element={
            <RequireAuth loginPath={"/login"}>
              <CreatePost />
            </RequireAuth>
          }
        />
        <Route
          path={"/update-post/:id"}
          element={
            <RequireAuth loginPath={"/login"}>
              <UpdatePost />
            </RequireAuth>
          }
        />
        <Route
          path={"/profile"}
          element={
            <RequireAuth loginPath={"/login"}>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path={"*"}
          element={
            <RequireAuth loginPath={"/posts"}>
              <AllPosts />
            </RequireAuth>
          }
        />
        <Route path={"*"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
