import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  //Route,
} from "react-router-dom";

/* ------------------------------------------- Routing for Blog Pages -------------------------------------------*/
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Create from "./pages/Create"
import FAQ from "./pages/FAQ"
import Post from "./pages/Post"

/* ------------------------------------------- Importing the styling --------------------------------------------*/
import "./mystyle.scss"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/create",
        element: <Create/>,
      },
      {
        path: "/faq",
        element: <FAQ/>,
      },
      {
        path: "/post/:id",
        element: <Post/>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/create",
    element: <Create/>,
  },
  {
    path: "/faq",
    element: <FAQ/>,
  },
  {
    path: "/post",
    element: <Post/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router = {router}/>
      </div>
    </div>
  );
}

export default App;
