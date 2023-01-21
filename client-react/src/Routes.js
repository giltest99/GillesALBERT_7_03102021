import React from "react";
import { RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AllPosts from "./components/AllPosts";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import ErrorPage from "./components/ErrorPage";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginForm />} />
        <Route path={"/register"} element={<RegisterForm />} />
        <Route
          path={"/posts"}
          element={
            <RequireAuth loginPath={"/"}>
              <AllPosts />
            </RequireAuth>
          }
        />
        <Route
          path={"/create-post"}
          element={
            <RequireAuth loginPath={"/"}>
              <CreatePost />
            </RequireAuth>
          }
        />
        <Route
          path={"/update-post/:id"}
          element={
            <RequireAuth loginPath={"/"}>
              <UpdatePost />
            </RequireAuth>
          }
        />
        <Route
          path={"/profile"}
          element={
            <RequireAuth loginPath={"/"}>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
