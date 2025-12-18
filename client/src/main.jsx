import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import HomePage from "./common/HomePage.jsx";
import NotFoundPage from "./common/NotFoundPage.jsx";

//import authMiddleware from "./middleware/authMiddleware.js";

import registerAction from "./actions/registerAction.js";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "register",
        Component: Register,
        //middleware: [authMiddleware],
        action: async ({ request }) => {
            return registerAction(request);
        },
    },
    {
        path: "login",
        Component: Login,
    },
    {
        path: "room/:roomId",
        //Component: Room,
        loader: async ({ params }) => {
            return { roomId: params.roomId };
        },
    },

    {
        path: "*",
        Component: NotFoundPage,
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
