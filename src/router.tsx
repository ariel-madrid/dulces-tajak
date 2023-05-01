import {createHashRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage"
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path:"inicio", element:<Home></Home>},
      {path:"productos", element:<HomePage/>},
      {path:"contacto", element:<Contact/>},
    ]
  },
]);

export default router;