import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Product from "./pages/Product.jsx";
import loadProduct from "./loaders/products.js";
import ProductBoundary from "./error-boundaries/ProductBoundary.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "products/:productId",
                element: <Product/>,
                loader: loadProduct,
                errorElement: <ProductBoundary />
            },
            {
                path: "cart",
                element: <Cart/>
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminHome/>
    }
]);

export default router;
