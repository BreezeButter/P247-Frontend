import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import DogPage from "../page/DogPage";
import CatPage from "../page/CatPage";
import ToyPage from "../page/ToyPage";
import MemberPage from "../page/MemberPage";
import AdminPage from "../page/AdminPage";
import Container from "../layouts/Container";



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
        path: "/member",
        element: <MemberPage />,
      },
      {
        path: "/admin/:memberuserId",
        element: <AdminPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}




