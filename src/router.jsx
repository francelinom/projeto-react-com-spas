import {createBrowserRouter} from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";
import AdminHome from "./components/AdminHome.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
]);

export default router;
