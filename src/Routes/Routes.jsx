import Main from "../Layout/Main";
import Home from "../Components/Pages/LandingPage/Home";
import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../Components/Pages/AllProducts/AllProducts";
import Cart from "../Components/Pages/Cart/Cart";
import ProductDetails from "../Components/Pages/ProductDetails/ProductDetails";
import Checkout from "../Components/Pages/checkout/Checkout";
import SignUp from "../Components/Pages/Auth/SignUp/SignUp";
import SignIn from "../Components/Pages/Auth/SignIn/SignIn";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import PaymentSuccess from "../Components/Pages/Payments/PaymentSuccess";
import PaymentCancel from "../Components/Pages/Payments/PaymentCancel";

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
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
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
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "payment/success/:tranId",
    element: <PaymentSuccess />,
  },
  {
    path: "payment/fail",
    element: <PaymentCancel />,
  },
]);
