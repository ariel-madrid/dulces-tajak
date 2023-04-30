import {createHashRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage"
import Home from "./components/Home";
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"home", element:<HomePage></HomePage>},
      {path:"inicio", element:<Home></Home>}
    ]
  },
]);

export default router;