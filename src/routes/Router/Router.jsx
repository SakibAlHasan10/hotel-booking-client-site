import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Bookings from "../../pages/Bookings/Bookings";
import Rooms from "../../pages/Rooms/Rooms";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import RoomDetails from "../../pages/RoomDetails/RoomDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/My Bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "/Rooms",
        element: <Rooms></Rooms>,
      },
      {
        path:"/About Us",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/Contact Us",
        element:<ContactUs></ContactUs>
      },
      {
        path:'/details/:id',
        element: <RoomDetails/>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
