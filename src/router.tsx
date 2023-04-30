import {createHashRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage"
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"home", element:<HomePage></HomePage>}
    ]
  },
]);

export default router;