import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";

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
