import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import More from './pages/More';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
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
        path: "/more",
        element: <More />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
     
    ],
  },
])

function App() {


  return (
    
    
      

      <main>
        <RouterProvider router={router} />
      </main>
    


    
  )
}

export default App
