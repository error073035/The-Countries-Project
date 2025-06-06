import { createRoot } from "react-dom/client";
import App from "./App";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const rootEle = document.querySelector("#root");
const root = createRoot(rootEle);
root.render(<App />);
// root.render(<RouterProvider router={router} />);
