import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import UploadBlog from "./pages/UploadBlog.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home/Home.jsx";
import PetSitter from "./pages/PetSitter/PetSitter.jsx";
import Services from "./pages/Services/Services.jsx";
import Community from "./pages/Community/Community.jsx";
import Error404 from "./pages/Error404/Error404.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Cart from './pages/Cart/Cart.jsx'

import { ToastContainer } from "react-toastify";

import Profile from "./components/UserProfile.jsx";
import Protected from "./components/Protected.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path:"/cart",element:<Cart/>},
      { path: "", element: <Home /> },
      { path: "/pet-sitter", element: <PetSitter /> },
      { path: "/services", element: <Services /> },
      { path: "/shop", element: <Shop /> },
      { path: "/community", element: <Protected compo={<Community />}/> },
      {
        path: "/userprofile",
        element: <Protected compo={<Profile />}/>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/upload",
    element: <UploadBlog />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
