import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import ManageCaterogy from "./pages/admin/manage-category";
import Dashboard from "./components/dashboard";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
