import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import ManageCaterogy from "./pages/admin/manage-category";
import Dashboard from "./components/dashboard";
import ManageVoucher from "./pages/admin/manage-voucher";
import ManageFood from "./pages/admin/foood";
import CheckOut from "./pages/check-out";

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
          path: "/check-out",
          element: <CheckOut />,
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
          path: "Voucher",
          element: <ManageVoucher />,
        },
        {
          path: "product",
          element: <ManageFood />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
