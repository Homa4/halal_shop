import "./App.css";
import Menu from "./pages/Menu/Menu";
import { createBrowserRouter, RouterProvider } from "react-router";
import Overview from "./pages/Overview/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
