import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import More from "./pages/More";
import Contact from "./pages/Contact";

import ErrorPage from "./pages/Error";
import Executives from "./pages/Executives";
import Birds from "./pages/Birds";
import SeaFood from "./pages/SeaFood";
import Livestock from "./pages/Livestock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <More />,
        children: [
          {
            index: true,
            element: <Birds />
          },
          {
            path: "seafood",
            element: <SeaFood />
          },
          {
            path: "livestock",
            element: <Livestock />
          },
        ]
      },
      {
        path: "/executives",
        element: <Executives />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
