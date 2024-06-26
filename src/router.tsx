import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App"
import Home from "./routes/Home";
import GenAi from "./routes/GenAi";
import Compare from "./routes/Compare";
import Package from "./routes/Package";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:  <p>Error fetching data....Please try again later.</p>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
       {
        path: "/genai",
        element: <GenAi/>
      },
       {
        path: "/package",
        element: <Package/>
      },
       {
        path: "/compare",
        element: <Compare/>
      },
    ],
  },
]);

export default router