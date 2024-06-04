import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultPage from "./Result.tsx";
import App from "./App.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'result',
    element: <ResultPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
