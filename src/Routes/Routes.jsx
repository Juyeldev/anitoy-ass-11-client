import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddToys from "../pages/AddToys/AddToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/MyToys/UpdateToy";
import AllToys from "../pages/AllToys/AllToys";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allToy',
        element: <AllToys></AllToys>,
        // loader:()=> 
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/toyDetails/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-ashy.vercel.app/postToy/${params.id}`)
      },
      {
        path: '/myToy',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://assignment-11-server-ashy.vercel.app/postToy/${params.id}`)

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },

      {
        path: "*",
        element: <Error></Error>
      }
    ]
  },

]);

export default router;