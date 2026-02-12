import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./store/store.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthLayout from "./Components/AuthLayout";

import {
  Login,
  SignUp,
  EditPost,
  AddPost,
  AllPosts,
  Home,
  Post,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
    ],
  },

  {
    element: <AuthLayout authentication={false} />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },

  {
    element: <AuthLayout authentication={true} />,
    children: [
      { path: "/all-posts", element: <AllPosts /> },
      { path: "/add-post", element: <AddPost /> },
      { path: "/edit-post/:slug", element: <EditPost /> },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
