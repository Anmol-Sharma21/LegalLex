import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
const ChatPage = lazy(() => import("./ChatPage.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/chat",
        element: (
          <Suspense fallback={<div>Hello World...</div>}>
            <ChatPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
