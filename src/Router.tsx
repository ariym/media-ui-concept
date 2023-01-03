import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import Wrapper from './Wrapper' // page header (and future footer)
import HomePage from './HomePage'
import Error404 from './Error404'
import TranscriptPlayer from "./TrancriptPlayer"

// router
const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "play/:id",
        element: <TranscriptPlayer />,
      },
    ]
  },
]);


export default function Router() {
  return (
    <RouterProvider
      fallbackElement={<ClipLoader />}
      router={router}
    />
  );
}