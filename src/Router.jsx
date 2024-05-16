import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MultiPage from "./pages/MultiPage";
import SoloPage from "./pages/SoloPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },

      {
        path: "/multipage",
        element: <MultiPage />,
      },
      {
        path: "/solopage",
        element: <SoloPage />,
      },
    ],
  },
]);

export default router;
