import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "articles",
        element: <Home />,
      },
      {
        path: "articles/:slug",
        element: <Article />,
      },
    ],
  },
]);

export default router;
