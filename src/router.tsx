import {
    createBrowserRouter
  } from "react-router-dom";
import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"home", element:<HomePage></HomePage>}
    ]
  },
]);

export default router;