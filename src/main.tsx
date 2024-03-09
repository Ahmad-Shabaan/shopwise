import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Features, Products, Trending, Logos } from "./pages/home/index.ts";
import Home from "./pages/Home.tsx";
const map = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/logos",
        element: <Logos />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={map} />
);
