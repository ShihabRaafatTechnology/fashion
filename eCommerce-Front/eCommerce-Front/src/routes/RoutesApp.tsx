import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// SuspensePageFallback Component
import SuspensePageFallback from "@components/feedback/SuspensePageFallback"

//Layouts
const MainLayout = lazy(() => import('@layouts/MainLayout'));;

// Pages
const Home = lazy(() => import('@pages/Home'));
const Categories = lazy(() => import('@pages/Categories'));
const Products = lazy(() => import('@pages/Products'));
const AboutUs = lazy(() => import('@pages/AboutUs'));
const Login = lazy(() => import('@pages/Login'));
const Register = lazy(() => import('@pages/Register'));
const ShoppingCart = lazy(() => import('@pages/ShoppingCart'));
const Wishlist = lazy(() => import('@pages/WishList')); 
import Error from '@pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SuspensePageFallback><MainLayout /></SuspensePageFallback>,
    errorElement: <SuspensePageFallback><Error /></SuspensePageFallback>,
    children: [{
      index: true,
      element: <SuspensePageFallback><Home /></SuspensePageFallback>
    }, {
      path: "categories",
      element: <SuspensePageFallback><Categories /></SuspensePageFallback>
    }, {
      path: "categories/products/:prefix",
      element: <SuspensePageFallback><Products /></SuspensePageFallback>,
      loader: ({ params }) => {
        if (
          typeof params.prefix !== "string" ||
          !/^[a-z]+$/i.test(params.prefix)
        ) {
          throw new Response("Bad Request", {
            statusText: "Category not found",
            status: 400,
          });
        }
        return true;
      },
    }, {
      path: "products/:prefix",
      element: <Suspense fallback="Loading please wait..."><Products /></Suspense>,
      loader: ({ params }) => {
        if (
          typeof params.prefix !== "string" ||
          !/^[a-z]+$/i.test(params.prefix)
        ) {
          throw new Response("Bad Request", {
            statusText: "Category not found",
            status: 400,
          });
        }
        return true;
      },
    }, {
      path: "cart",
      element: <Suspense fallback="Loading please wait..."><ShoppingCart /></Suspense>
    }, {
      path: "wishlist",
      element: <Suspense fallback="Loading please wait..."><Wishlist /></Suspense>
    }, {
      path: "about-us",
      element: <Suspense fallback="Loading please wait..."><AboutUs /></Suspense>
    }, {
      path: "sign-in",
      element: <Suspense fallback="Loading please wait..."><Login /></Suspense>
    }, {
      path: "register",
      element: <Suspense fallback="Loading please wait..."><Register /></Suspense>
    }]
  }
]);
const RoutesApp = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default RoutesApp;