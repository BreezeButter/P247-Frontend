import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import DogPage from "../page/DogPage";
import CatPage from "../page/CatPage";
import ToyPage from "../page/ToyPage";
import MemberPage from "../page/MemberPage";
import AdminPage from "../page/AdminPage";
import Container from "../layouts/Container";
import OrderPage from "../page/OrderPage";
import PaymentPage from "../page/PaymentPage";
import MemberInfo from "../features/auth/components/MemberInfo";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container />
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dog",
        element: <DogPage />,
      },
      {
        path: "/cat",
        element: <CatPage />,
      },
      {
        path: "/toy",
        element: <ToyPage />,
      },
      {
        path: "/member/order",
        element: (
        <ProtectedRoute>
        <MemberPage />
        </ProtectedRoute>)
      },
      {
        path: "/member/info",
        element: (
          <ProtectedRoute>
            <MemberInfo />
          </ProtectedRoute>
        )
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/order",
        element:  <OrderPage/>
      },
      {
        path: "/payment",
        element:  <PaymentPage/>
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}




