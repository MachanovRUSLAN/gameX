import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import ProductPage from "../Components/ProductPage/ProductPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import ScrollToTop from "../ScroolToTop/ScroolOnTop";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <ScrollToTop/>
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop/:id",
        element: <ProductPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
