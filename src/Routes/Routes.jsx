import Main from "../Layout/Main";
import Home from "../Components/Pages/LandingPage/Home";
import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../Components/Pages/AllProducts/AllProducts";
import Cart from "../Components/Pages/Cart/Cart";
import ProductDetails from "../Components/Pages/ProductDetails/ProductDetails";
import Checkout from "../Components/Pages/checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    //   errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/all-products",
    element: <AllProducts></AllProducts>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
]);
