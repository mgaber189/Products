import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import Products from "./components/product/Products";
import Rootrouter from "./components/router/Rootrouter";
import Cart from "./components/cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootrouter />,
    children: [
      {
        index: true,
        element: <Products />,
      },
            {
        path:"/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
