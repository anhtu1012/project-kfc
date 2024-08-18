import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import ManageCaterogy from "./pages/admin/manage-category";
import Dashboard from "./components/dashboard";
import ManageProduct from "./pages/admin/manage-product";
import ManageVoucher from "./pages/admin/manage-voucher";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "category",
          element: <ManageCaterogy />,
        },
        {
          path: "product",
          element: <ManageProduct />,
        },
        {
          path: "Voucher",
          element: <ManageVoucher />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
