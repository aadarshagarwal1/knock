import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/createPost.jsx";
import Home from "./components/home.jsx";
import MainContent from "./components/mainContent.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/knock/",
        element: <MainContent />,
        children: [
          {
            path: "/knock/home",
            element: <Home />,
          },
          {
            path: "/knock/",
            element: <Home />,
          },
          {
            path: "/knock/create-post",
            element: <CreatePost />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
